import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pw7rvel_v.css';
import '../../css/a/aaakgqotp.css';
import '../../css/w/wxgs__din.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pw7rvel_v"/><circle class="aaakgqotp"/><circle class="wxgs__din"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:sliders-simple"} {...others} />);
}

export default Component;
