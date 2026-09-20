import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub495bo-g.css';
import '../../css/k/k2_jljtay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ub495bo-g"/><path class="k2_jljtay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lollipop"} {...others} />);
}

export default Component;
