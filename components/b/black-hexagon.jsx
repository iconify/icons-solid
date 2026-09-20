import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl7_itbah.css';
import '../../css/i/i8zs08y5g.css';
import '../../css/e/es2jbccom.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xl7_itbah"/><path class="i8zs08y5g"/><path class="es2jbccom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-hexagon"} {...others} />);
}

export default Component;
