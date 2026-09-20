import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_beh8btb.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="w_beh8btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:rack-ipc-fail"} {...others} />);
}

export default Component;
