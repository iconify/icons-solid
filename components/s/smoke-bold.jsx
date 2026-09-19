import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z10qtpnpq.css';
import '../../css/a/alr-4c-fm.css';
import '../../css/b/besnr4x3o.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z10qtpnpq"/><path class="alr-4c-fm"/><path class="besnr4x3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smoke-bold"} {...others} />);
}

export default Component;
