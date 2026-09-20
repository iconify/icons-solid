import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zy1g3fbrq.css';
import '../../css/w/whkhhuxjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zy1g3fbrq"/><path class="whkhhuxjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gift-two-tone"} {...others} />);
}

export default Component;
