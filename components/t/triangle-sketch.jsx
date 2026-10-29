import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aswhmfbgj.css';
import '../../css/z/z5ah4rbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aswhmfbgj"/><path class="z5ah4rbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:triangle-sketch"} {...others} />);
}

export default Component;
