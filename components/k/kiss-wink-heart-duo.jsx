import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udfbrio3v.css';
import '../../css/u/uf-kssbkg.css';
import '../../css/w/we8zns5ar.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="udfbrio3v"/><path class="uf-kssbkg"/><path class="we8zns5ar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:kiss-wink-heart-duo"} {...others} />);
}

export default Component;
