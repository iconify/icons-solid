import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cye_ary3w.css';
import '../../css/b/bvaiq_bit.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="cye_ary3w"/><path class="bvaiq_bit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xvc"} {...others} />);
}

export default Component;
