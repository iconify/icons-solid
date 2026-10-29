import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/teyry0bvj.css';
import '../../css/h/h8t4uobjx.css';
import '../../css/e/eznhzablb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="teyry0bvj"/><path class="h8t4uobjx wm-shadow"/><path class="eznhzablb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glasses-engrave"} {...others} />);
}

export default Component;
