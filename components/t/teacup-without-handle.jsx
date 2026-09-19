import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un-n3-b_f.css';
import '../../css/v/va_rctb0l.css';
import '../../css/a/a1bbkcckl.css';
import '../../css/y/ymu3v06_c.css';
import '../../css/d/d7o_noino.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="un-n3-b_f"/><path class="va_rctb0l"/><path class="a1bbkcckl"/><path class="ymu3v06_c"/><path class="d7o_noino"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:teacup-without-handle"} {...others} />);
}

export default Component;
