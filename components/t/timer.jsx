import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lva8hg_ix.css';
import '../../css/l/l_3c_lb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lva8hg_ix"/><circle class="l_3c_lb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:timer"} {...others} />);
}

export default Component;
