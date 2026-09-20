import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/i/ior59nbtv.css';
import '../../css/q/qtfdrdlqr.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/g/g5w28_b1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ior59nbtv"/><path class="qtfdrdlqr"/><circle class="fr_tmn9fp"/><path class="g5w28_b1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:roll-alt"} {...others} />);
}

export default Component;
