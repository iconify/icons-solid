import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hdzkbes4f.css';
import '../../css/j/jdlbr4k1q.css';
import '../../css/v/vsi98cbpj.css';
import '../../css/l/lb17mgb2c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hdzkbes4f"/><path class="jdlbr4k1q"/><path clip-rule="evenodd" class="vsi98cbpj"/><path class="lb17mgb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-remove-outline"} {...others} />);
}

export default Component;
