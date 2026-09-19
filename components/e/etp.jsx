import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w77m49blm.css';
import '../../css/k/kpt1x2d0e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="w77m49blm"/><path class="kpt1x2d0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:etp"} {...others} />);
}

export default Component;
