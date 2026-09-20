import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf-s5qb_j.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="mf-s5qb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:runtime-stop"} {...others} />);
}

export default Component;
