import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jcdecwuae.css';
import '../../css/o/oj3803_hd.css';
import '../../css/g/g64qnebgv.css';
import '../../css/j/j213v3bou.css';
import '../../css/f/fj5tglyjy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="jcdecwuae"/><path class="oj3803_hd"/><path class="g64qnebgv"/><path class="j213v3bou"/><path class="fj5tglyjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:goblet-cracking"} {...others} />);
}

export default Component;
