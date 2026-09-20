import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xro_uz.css';
import '../../css/d/d-xntmfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xro_uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-to-close-transition"} {...others} />);
}

export default Component;
