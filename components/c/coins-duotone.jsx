import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j41a42nnh.css';
import '../../css/y/y5hju585n.css';
import '../../css/i/ifp2kfhez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j41a42nnh"/><path clip-rule="evenodd" class="y5hju585n"/><path class="ifp2kfhez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coins-duotone"} {...others} />);
}

export default Component;
