import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o225eqbfr.css';
import '../../css/s/saa_1lb-w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="o225eqbfr"/><path class="saa_1lb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:lbc"} {...others} />);
}

export default Component;
