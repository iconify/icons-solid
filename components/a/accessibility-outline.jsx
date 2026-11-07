import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqfd3tq5k.css';
import '../../css/s/sc74p3-8j.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hqfd3tq5k"/><path class="sc74p3-8j"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accessibility-outline"} {...others} />);
}

export default Component;
