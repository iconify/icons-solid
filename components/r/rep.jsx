import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6pe_w2_a.css';
import '../../css/a/ah8v0x1oz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="g6pe_w2_a"/><path class="ah8v0x1oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:rep"} {...others} />);
}

export default Component;
