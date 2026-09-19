import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n01nh0bss.css';
import '../../css/i/if7mopb_h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="n01nh0bss"/><path class="if7mopb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wpr"} {...others} />);
}

export default Component;
