import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n1r6dl4la.css';
import '../../css/q/qo9ef2xtw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="n1r6dl4la"/><path class="qo9ef2xtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:intersect"} {...others} />);
}

export default Component;
