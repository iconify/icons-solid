import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucm_evpsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucm_evpsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:laptop-code-outline"} {...others} />);
}

export default Component;
