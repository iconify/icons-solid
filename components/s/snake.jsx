import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2nhrni-v.css';
import '../../css/a/az532d-fz.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qdzbtslrm.css';
import '../../css/r/rkh9jmd8r.css';
import '../../css/m/muedlcc7n.css';
import '../../css/h/h8810e80n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l2nhrni-v"/><path class="az532d-fz"/><g class="z04drlb1l"><path class="qdzbtslrm"/><path class="rkh9jmd8r"/><path class="muedlcc7n"/><path class="h8810e80n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:snake"} {...others} />);
}

export default Component;
