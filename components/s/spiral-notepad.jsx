import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3a2aacyc.css';
import '../../css/y/yv8fuzbct.css';
import '../../css/y/yto5y8bbe.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yws1qebfx.css';
import '../../css/r/rp169lb8c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o3a2aacyc"/><path class="yv8fuzbct"/><path class="yto5y8bbe"/><g class="ij2x_72vy"><path class="yws1qebfx"/><path class="rp169lb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spiral-notepad"} {...others} />);
}

export default Component;
