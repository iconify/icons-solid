import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jsj8gunlj.css';
import '../../css/m/mzmeouzvr.css';
import '../../css/i/ifpcpz80t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jsj8gunlj"/><path class="mzmeouzvr"/><path class="ifpcpz80t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plus-minus-line-duotone"} {...others} />);
}

export default Component;
