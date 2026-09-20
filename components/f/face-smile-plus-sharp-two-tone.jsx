import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x1f6uobqa.css';
import '../../css/t/tvgeq3bie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="x1f6uobqa"/><path class="tvgeq3bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:face-smile-plus-sharp-two-tone"} {...others} />);
}

export default Component;
