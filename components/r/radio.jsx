import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xsxefibul.css';
import '../../css/o/oysvhqbff.css';
import '../../css/a/aa3pg6tfa.css';
import '../../css/z/z9siq2ywd.css';
import '../../css/w/w4wk9jarw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xsxefibul"/><path class="oysvhqbff"/><path class="aa3pg6tfa"/><path class="z9siq2ywd"/><path class="w4wk9jarw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:radio"} {...others} />);
}

export default Component;
