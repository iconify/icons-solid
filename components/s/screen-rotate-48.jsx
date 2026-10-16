import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm1rnhb5b.css';
import '../../css/q/qrszpl-4t.css';
import '../../css/g/g0ukppbir.css';
import '../../css/x/xo2tenbed.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zm1rnhb5b"/><path class="qrszpl-4t"/><path class="g0ukppbir"/><path class="xo2tenbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screen-rotate-48"} {...others} />);
}

export default Component;
