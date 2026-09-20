import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd3xeabnc.css';
import '../../css/x/xdekdlbik.css';
import '../../css/c/c16sh3j5m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kd3xeabnc"/><path class="xdekdlbik"/><path class="c16sh3j5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-global-warming-globe-fire"} {...others} />);
}

export default Component;
