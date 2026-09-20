import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gvsbrmb7s.css';
import '../../css/m/mmxijrbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gvsbrmb7s"/><path class="mmxijrbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:star-two-tone"} {...others} />);
}

export default Component;
