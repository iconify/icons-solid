import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihdo3z29c.css';
import '../../css/i/itsf3wbas.css';
import '../../css/a/astq4bb3x.css';
import '../../css/v/vf565cbtz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ihdo3z29c"/><path class="itsf3wbas"/><path class="astq4bb3x"/><path class="vf565cbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ball-valve-20-bold"} {...others} />);
}

export default Component;
