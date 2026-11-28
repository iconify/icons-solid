import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/minh_dbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="minh_dbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:database-gear"} {...others} />);
}

export default Component;
