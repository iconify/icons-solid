import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dkokuzbdo.css';
import '../../css/y/yu5dcnbja.css';
import '../../css/d/dvfbfzmtn.css';
import '../../css/v/v_917cbym.css';
import '../../css/p/py8uhtbvo.css';
import '../../css/b/bkl37ubqe.css';
import '../../css/j/jmc0zlhem.css';
import '../../css/z/znsj4jb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dkokuzbdo"/><path class="yu5dcnbja"/><path class="dvfbfzmtn wm-shine"/><path class="v_917cbym wm-k"/><path class="py8uhtbvo wm-a"/><path class="bkl37ubqe"/><path class="jmc0zlhem"/><path class="wm-shine znsj4jb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tooth-crown"} {...others} />);
}

export default Component;
