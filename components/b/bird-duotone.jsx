import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2ktcybbz.css';
import '../../css/i/ig4rehbns.css';
import '../../css/j/jbg64mbay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d2ktcybbz"/><path class="ig4rehbns"/><path class="jbg64mbay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bird-duotone"} {...others} />);
}

export default Component;
