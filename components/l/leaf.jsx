import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlklpib-i.css';
import '../../css/q/qwa3owbzy.css';
import '../../css/y/y9zeih8gt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xlklpib-i"/><path class="qwa3owbzy"/><path class="y9zeih8gt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:leaf"} {...others} />);
}

export default Component;
