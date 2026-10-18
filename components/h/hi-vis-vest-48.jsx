import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkegzz3bi.css';
import '../../css/h/h07j5abjx.css';
import '../../css/w/ws21njb2r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hkegzz3bi"/><path class="h07j5abjx"/><path class="ws21njb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hi-vis-vest-48"} {...others} />);
}

export default Component;
