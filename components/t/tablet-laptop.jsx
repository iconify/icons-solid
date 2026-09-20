import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j2ceu2b_w.css';
import '../../css/m/m47tg1piq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="j2ceu2b_w"/><path class="m47tg1piq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:tablet-laptop"} {...others} />);
}

export default Component;
