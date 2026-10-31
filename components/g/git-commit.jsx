import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cffgsjvke.css';
import '../../css/t/tkha_o8sv.css';
import '../../css/e/e9npa2yyf.css';
import '../../css/w/wv2ht2uty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cffgsjvke wm-shadow"/><path class="tkha_o8sv"/><path class="e9npa2yyf"/><path class="wv2ht2uty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-commit"} {...others} />);
}

export default Component;
