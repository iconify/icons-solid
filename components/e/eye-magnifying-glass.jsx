import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blc_bco-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="blc_bco-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:eye-magnifying-glass"} {...others} />);
}

export default Component;
