import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovt9mfbde.css';
import '../../css/d/drbh0xbue.css';
import '../../css/w/wf196s0yh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ovt9mfbde"/><path class="drbh0xbue"/><path class="wf196s0yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-climb-top"} {...others} />);
}

export default Component;
