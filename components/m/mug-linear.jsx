import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tfgra3ble.css';
import '../../css/b/b8muav1zi.css';
import '../../css/u/utnv9fgpg.css';
import '../../css/j/jlzv4qbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tfgra3ble"/><path class="b8muav1zi"/><path class="utnv9fgpg"/><path class="jlzv4qbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mug-linear"} {...others} />);
}

export default Component;
