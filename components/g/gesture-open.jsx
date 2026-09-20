import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyxsd66nc.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbb0xvb8v.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/j/j8ruo_bjg.css';
import '../../css/g/goykrqcfs.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGwwyqN1xl" class="cyxsd66nc"/></defs><g class="ft5dv1b6b"><path class="fbb0xvb8v"/><use href="#SVGwwyqN1xl"/><g class="p_3zmsvya"><path class="j8ruo_bjg"/><path class="goykrqcfs"/><use href="#SVGwwyqN1xl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-open"} {...others} />);
}

export default Component;
