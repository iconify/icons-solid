import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_ya_cbut.css';
import '../../css/d/ds4k--4aj.css';
import '../../css/f/fqt_spbrj.css';
import '../../css/h/h6sr52b2c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f_ya_cbut"/><path class="ds4k--4aj"/><path class="fqt_spbrj"/><path class="h6sr52b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mensshoe"} {...others} />);
}

export default Component;
