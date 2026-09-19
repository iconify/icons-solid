import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p01z6lbzt.css';
import '../../css/r/rt6ctoidb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p01z6lbzt"/><path class="rt6ctoidb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:align-box-middle-left"} {...others} />);
}

export default Component;
