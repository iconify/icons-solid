import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lczo6ys_s.css';
import '../../css/c/cxrrxpb0b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lczo6ys_s"/><path class="cxrrxpb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:mathematics-display-default"} {...others} />);
}

export default Component;
