import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4ja2u2gr.css';
import '../../css/f/f3lwcxwxj.css';
import '../../css/v/vo5bnim8v.css';
import '../../css/h/hcug3lbyp.css';
import '../../css/w/wsh_gnb-t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f4ja2u2gr"/><path class="f3lwcxwxj"/><path class="vo5bnim8v"/><circle class="hcug3lbyp"/><circle class="wsh_gnb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:peas"} {...others} />);
}

export default Component;
