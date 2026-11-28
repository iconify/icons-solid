import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7dfh_bxr.css';
import '../../css/d/doa6wmbxk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p7dfh_bxr"/><path class="doa6wmbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prusa-connect"} {...others} />);
}

export default Component;
