import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1bbndrsh.css';
import '../../css/u/ullp8vaok.css';
import '../../css/n/nx2c618gt.css';
import '../../css/d/douhlrken.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="j1bbndrsh"><path class="ullp8vaok"/><path class="nx2c618gt"/><path class="douhlrken"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:docs-outline"} {...others} />);
}

export default Component;
