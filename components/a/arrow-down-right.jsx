import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi0xuvbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi0xuvbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:arrow-down-right"} {...others} />);
}

export default Component;
