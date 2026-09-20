import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z05ycos6n.css';
import '../../css/v/v6et4oj-h.css';
import '../../css/z/z_42b5rua.css';
import '../../css/k/k4zy_fb6k.css';
import '../../css/u/ul-tm_bmr.css';
import '../../css/l/lglq-4b3g.css';
import '../../css/m/mjsjjzbsk.css';
import '../../css/l/lzzavebzb.css';
import '../../css/g/guu8o47we.css';
import '../../css/e/e1b1npb4w.css';
import '../../css/u/u3rp79bbx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z05ycos6n"/><path class="v6et4oj-h"/><path class="z_42b5rua"/><path class="k4zy_fb6k"/><path class="ul-tm_bmr"/><path class="lglq-4b3g"/><path class="mjsjjzbsk"/><path class="lzzavebzb"/><path class="guu8o47we"/><path class="e1b1npb4w"/><path class="u3rp79bbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-fairy-medium-dark-skin-tone"} {...others} />);
}

export default Component;
