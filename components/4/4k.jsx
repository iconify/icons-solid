import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbmo2xbmb.css';
import '../../css/r/rp66vlbcn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qbmo2xbmb"/><path class="rp66vlbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:4k"} {...others} />);
}

export default Component;
