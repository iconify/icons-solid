import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wot1e0bkv.css';
import '../../css/d/drdla2-9e.css';
import '../../css/w/wdin9-bzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wot1e0bkv"/><circle class="drdla2-9e"/><circle class="wdin9-bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-car"} {...others} />);
}

export default Component;
