import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f8q_fbb1o.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/a/aqt7m5bse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f8q_fbb1o"/><circle class="ptvu1u_4n"/><path class="aqt7m5bse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:flower-pot"} {...others} />);
}

export default Component;
