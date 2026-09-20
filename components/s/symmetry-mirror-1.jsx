import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/q3qnc6bjm.css';
import '../../css/k/k8t4rebbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="q3qnc6bjm"/><path class="k8t4rebbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:symmetry-mirror-1"} {...others} />);
}

export default Component;
