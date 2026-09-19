import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asoc6abfb.css';
import '../../css/c/cyzgarbmo.css';
import '../../css/r/refo3vb5p.css';
import '../../css/a/a962_2bzl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="asoc6abfb"/><path class="cyzgarbmo"/><path class="refo3vb5p"/><path clip-rule="evenodd" class="a962_2bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:globe-stand-east"} {...others} />);
}

export default Component;
