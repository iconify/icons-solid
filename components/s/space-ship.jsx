import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-ouzl-kl.css';
import '../../css/u/uqx522byj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="q-ouzl-kl"/><path class="uqx522byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:space-ship"} {...others} />);
}

export default Component;
