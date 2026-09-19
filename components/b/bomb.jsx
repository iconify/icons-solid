import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le24a6ftv.css';
import '../../css/h/hfxgwyofh.css';
import '../../css/j/jk2u74b-e.css';
import '../../css/l/l49cwhbnf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="le24a6ftv"/><path class="hfxgwyofh"/><path class="jk2u74b-e"/><path class="l49cwhbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bomb"} {...others} />);
}

export default Component;
