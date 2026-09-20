import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtv5yrb6k.css';
import '../../css/s/stxf-nbvm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rtv5yrb6k"/><path class="stxf-nbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:dashboard"} {...others} />);
}

export default Component;
