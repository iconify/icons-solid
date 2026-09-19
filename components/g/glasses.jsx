import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jqf3k5b0c.css';
import '../../css/o/oxysw7b-r.css';
import '../../css/k/k-0n1_78t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jqf3k5b0c"/><path class="oxysw7b-r"/><path class="k-0n1_78t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:glasses"} {...others} />);
}

export default Component;
