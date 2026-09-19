import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q2iciacjh.css';
import '../../css/e/e288spbik.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><circle class="q2iciacjh"/><path class="e288spbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-bold"} {...others} />);
}

export default Component;
