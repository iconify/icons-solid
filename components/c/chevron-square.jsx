import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t7besvb1f.css';
import '../../css/q/qe5gyrozs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="t7besvb1f"/><path class="qe5gyrozs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chevron-square"} {...others} />);
}

export default Component;
