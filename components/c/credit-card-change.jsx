import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqjpdbb6e.css';
import '../../css/n/nlm8upbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vqjpdbb6e"/><path class="nlm8upbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-change"} {...others} />);
}

export default Component;
