import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnuscxboo.css';
import '../../css/i/iik--rn3y.css';
import '../../css/j/jdp6hwbta.css';
import '../../css/g/gpifwzblh.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="fnuscxboo"/><path class="iik--rn3y"/><path class="jdp6hwbta"/><path class="gpifwzblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globe-bold-duotone"} {...others} />);
}

export default Component;
