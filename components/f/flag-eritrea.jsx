import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/h/hlaht7bkp.css';
import '../../css/w/w3om4-xnt.css';
import '../../css/s/sq2yiaciq.css';
import '../../css/b/bib5azb3j.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="hlaht7bkp"/><path class="w3om4-xnt"/><circle class="sq2yiaciq"/><path class="bib5azb3j"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-eritrea"} {...others} />);
}

export default Component;
