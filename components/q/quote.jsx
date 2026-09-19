import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qb0lggbeh.css';
import '../../css/l/ls-k7fbvx.css';
import '../../css/j/jrxzbpz9f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="qb0lggbeh"/><path class="ls-k7fbvx"/><path class="jrxzbpz9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:quote"} {...others} />);
}

export default Component;
