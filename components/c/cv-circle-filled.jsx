import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cddoteztz.css';
import '../../css/h/hp1jik5rx.css';
import '../../css/g/g1mpjwb3y.css';
import '../../css/p/pcmitcb0y.css';
import '../../css/z/z_xoyse8f.css';
import '../../css/n/ngjcg1cqm.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><path class="cddoteztz"/><path class="hp1jik5rx"/><path clip-rule="evenodd" class="g1mpjwb3y"/><path class="pcmitcb0y"/><path class="z_xoyse8f"/><path clip-rule="evenodd" class="ngjcg1cqm"/><path clip-rule="evenodd" class="jfigzne9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cv-circle-filled"} {...others} />);
}

export default Component;
