import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/krlqhg1vv.css';
import '../../css/g/gjhk4hg9v.css';
import '../../css/k/kyw7u59pj.css';
import '../../css/q/q69l88bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="krlqhg1vv wm-shadow"/><path class="gjhk4hg9v"/><path class="kyw7u59pj"/><path class="q69l88bkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:virus"} {...others} />);
}

export default Component;
