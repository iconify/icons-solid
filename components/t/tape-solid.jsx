import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql119pv2w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ql119pv2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:tape-solid"} {...others} />);
}

export default Component;
