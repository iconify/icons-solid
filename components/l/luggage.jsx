import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qsy9cyblc.css';
import '../../css/u/uh-9-99fe.css';
import '../../css/i/iujjribmd.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qsy9cyblc"/><path class="uh-9-99fe"/><circle class="iujjribmd"/><circle class="wzga5cc5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:luggage"} {...others} />);
}

export default Component;
