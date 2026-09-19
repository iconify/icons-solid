import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wss56ybga.css';
import '../../css/p/p3ixe5bhp.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="wss56ybga"/><path class="p3ixe5bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:like"} {...others} />);
}

export default Component;
