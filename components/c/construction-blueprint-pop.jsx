import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwl9zmixj.css';
import '../../css/p/p6yle9bpb.css';
import '../../css/v/vg4-crxmn.css';
import '../../css/i/iu_q9tb2j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nwl9zmixj"/><path class="p6yle9bpb"/><path class="vg4-crxmn"/><path class="iu_q9tb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:construction-blueprint-pop"} {...others} />);
}

export default Component;
