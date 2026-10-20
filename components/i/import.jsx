import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kx5vs6bjc.css';
import '../../css/h/hnu3midvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kx5vs6bjc"/><path class="hnu3midvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:import"} {...others} />);
}

export default Component;
