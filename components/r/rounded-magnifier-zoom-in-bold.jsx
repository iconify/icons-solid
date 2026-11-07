import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnj89bbgy.css';
import '../../css/z/z1_dpab3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnj89bbgy"/><path clip-rule="evenodd" class="z1_dpab3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-zoom-in-bold"} {...others} />);
}

export default Component;
