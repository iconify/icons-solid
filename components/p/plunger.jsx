import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mc_u4bvwv.css';
import '../../css/o/oxy_0ibih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mc_u4bvwv"/><path class="oxy_0ibih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:plunger"} {...others} />);
}

export default Component;
