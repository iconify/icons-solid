import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bn340ib1t.css';
import '../../css/h/hu30fdbrj.css';
import '../../css/w/wz6jt76ak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bn340ib1t"/><path class="hu30fdbrj"/><path class="wz6jt76ak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-linear"} {...others} />);
}

export default Component;
