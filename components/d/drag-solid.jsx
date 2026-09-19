import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/d/d5_1zjbjn.css';
import '../../css/n/n2b_1ac0y.css';
import '../../css/k/kfz17clka.css';
import '../../css/h/h-n5wackw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="d5_1zjbjn"/><path class="n2b_1ac0y"/><path class="kfz17clka"/><path class="h-n5wackw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:drag-solid"} {...others} />);
}

export default Component;
