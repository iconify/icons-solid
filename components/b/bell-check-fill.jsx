import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qperobbfd.css';
import '../../css/k/kpao5obta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qperobbfd"/><path class="kpao5obta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-check-fill"} {...others} />);
}

export default Component;
