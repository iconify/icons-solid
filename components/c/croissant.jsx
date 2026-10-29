import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chyz9hx-t.css';
import '../../css/u/uw6od76wc.css';
import '../../css/y/yjp-fdb4i.css';
import '../../css/n/nrkmvhwwj.css';
import '../../css/w/wcsi8pbqh.css';
import '../../css/h/hm13dx3kc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="chyz9hx-t wm-k"/><path class="uw6od76wc wm-k"/><path class="wm-k yjp-fdb4i"/><path class="nrkmvhwwj wm-k"/><path class="wcsi8pbqh wm-shine"/><path class="hm13dx3kc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:croissant"} {...others} />);
}

export default Component;
