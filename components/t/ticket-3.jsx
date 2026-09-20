import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1c7blwuq.css';
import '../../css/k/kw2etuk8n.css';
import '../../css/p/pvfzuob1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="q1c7blwuq"/><circle class="kw2etuk8n"/><path class="pvfzuob1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticket-3"} {...others} />);
}

export default Component;
