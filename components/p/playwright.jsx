import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bccvmwbwi.css';
import '../../css/u/untxrjb9g.css';
import '../../css/w/w86p9bc6o.css';
import '../../css/l/ls9c3_b3j.css';
import '../../css/j/jdrknnb0g.css';
import '../../css/r/ruh9e-jyj.css';
import '../../css/z/z0zjefx8z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bccvmwbwi"/><path class="untxrjb9g"/><path class="w86p9bc6o"/><path class="ls9c3_b3j"/><path class="jdrknnb0g"/><path class="ruh9e-jyj"/><path class="z0zjefx8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:playwright"} {...others} />);
}

export default Component;
