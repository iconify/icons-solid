import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2_fttfir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2_fttfir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:pizza"} {...others} />);
}

export default Component;
