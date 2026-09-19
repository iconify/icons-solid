import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otpvh6y5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="shield-outline"><path class="(Stroke) 69 Vector otpvh6y5u" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:shield-outline"} {...others} />);
}

export default Component;
