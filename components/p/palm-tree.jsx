import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fd4516bkc.css';
import '../../css/a/a9jatqbor.css';
import '../../css/u/ubi9_ybhe.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="fd4516bkc"/><path class="a9jatqbor"/><path class="ubi9_ybhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palm-tree"} {...others} />);
}

export default Component;
