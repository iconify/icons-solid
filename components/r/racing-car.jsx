import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js4xrrb6o.css';
import '../../css/f/fa5s4gbyf.css';
import '../../css/n/nr5v-lmdl.css';
import '../../css/s/s8vd0lbgf.css';
import '../../css/q/qfv_xeb2h.css';
import '../../css/r/rgwwspb5y.css';
import '../../css/v/vnxnarb7x.css';
import '../../css/s/sh0rau3mi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="js4xrrb6o"/><path class="fa5s4gbyf"/><circle class="nr5v-lmdl"/><circle class="s8vd0lbgf"/><circle class="qfv_xeb2h"/><circle class="rgwwspb5y"/><circle class="vnxnarb7x"/><path class="sh0rau3mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:racing-car"} {...others} />);
}

export default Component;
