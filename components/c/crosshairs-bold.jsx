import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vihlqctim.css';
import '../../css/n/n_mwznbih.css';
import '../../css/o/oh3b46blr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vihlqctim"/><path clip-rule="evenodd" class="n_mwznbih"/><path class="oh3b46blr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crosshairs-bold"} {...others} />);
}

export default Component;
