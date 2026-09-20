import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld24yvbps.css';
import '../../css/t/t59yavedn.css';
import '../../css/b/bfa9u6b3s.css';
import '../../css/v/vyf_cubjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ld24yvbps"/><path class="t59yavedn"/><path class="bfa9u6b3s"/><path class="vyf_cubjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:target-arrow"} {...others} />);
}

export default Component;
