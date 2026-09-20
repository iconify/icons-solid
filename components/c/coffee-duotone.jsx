import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fiqwvobaq.css';
import '../../css/y/ypvgs-1rm.css';
import '../../css/v/vv3j1obhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fiqwvobaq"/><path clip-rule="evenodd" class="ypvgs-1rm"/><path class="vv3j1obhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coffee-duotone"} {...others} />);
}

export default Component;
