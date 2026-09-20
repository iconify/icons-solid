import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1vr99bnq.css';
import '../../css/h/hh09d7bqz.css';
import '../../css/e/euwq71b-p.css';
import '../../css/f/fdsertx7f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c1vr99bnq"/><path class="hh09d7bqz"/><path class="euwq71b-p"/><path class="fdsertx7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:voice-mail"} {...others} />);
}

export default Component;
