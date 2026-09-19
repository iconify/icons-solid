import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q-bnilbrs.css';
import '../../css/k/ksr677udw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q-bnilbrs"/><path class="ksr677udw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-spray"} {...others} />);
}

export default Component;
