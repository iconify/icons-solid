import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/si22bkotj.css';
import '../../css/j/jdwc3aclm.css';
import '../../css/a/a16ksebqi.css';
import '../../css/h/htbmnrb-j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="si22bkotj"/><path class="jdwc3aclm"/><path class="a16ksebqi"/><path class="htbmnrb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sim-card"} {...others} />);
}

export default Component;
