import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xidhcvb4b.css';
import '../../css/f/f4t4-gdfr.css';
import '../../css/g/g6txpibja.css';
import '../../css/z/z04drlb1l.css';
import '../../css/t/tmyy3wbeo.css';
import '../../css/o/owjqebbpv.css';
import '../../css/s/smaldow6n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xidhcvb4b"/><path class="f4t4-gdfr"/><path class="g6txpibja"/><g class="z04drlb1l"><path class="tmyy3wbeo"/><path class="owjqebbpv"/><path class="smaldow6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:safety-vest"} {...others} />);
}

export default Component;
