import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvr0h0xiz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qvr0h0xiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:plugin"} {...others} />);
}

export default Component;
