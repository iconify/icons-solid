import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0-kxwb1h.css';
import '../../css/u/u34l0vbjl.css';
import '../../css/g/gnwn-8biw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s0-kxwb1h"/><path clip-rule="evenodd" class="u34l0vbjl"/><path class="gnwn-8biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hand-held-tablet-writing-flat"} {...others} />);
}

export default Component;
