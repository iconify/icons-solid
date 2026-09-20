import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/asyphl89v.css';
import '../../css/h/hd0f2xmdw.css';
import '../../css/g/gcrp6yu8e.css';
import '../../css/f/fafv2obpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="asyphl89v"/><path class="hd0f2xmdw"/><path class="gcrp6yu8e"/><path class="fafv2obpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:copilotkit"} {...others} />);
}

export default Component;
