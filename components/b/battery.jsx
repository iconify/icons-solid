import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht81txcah.css';
import '../../css/c/crljwsbaw.css';
import '../../css/m/mpqhj5bgk.css';
import '../../css/z/z3eybkb8m.css';
import '../../css/c/cxvwwmbih.css';
import '../../css/d/d09skzbgf.css';
import '../../css/s/sbmbppbrz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ht81txcah"/><path class="crljwsbaw"/><path class="mpqhj5bgk"/><path class="z3eybkb8m"/><path class="cxvwwmbih"/><path class="d09skzbgf"/><path class="sbmbppbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:battery"} {...others} />);
}

export default Component;
