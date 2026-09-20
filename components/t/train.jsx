import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzo_s6m5m.css';
import '../../css/m/mfabyo3pw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hzo_s6m5m"/><path class="mfabyo3pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:train"} {...others} />);
}

export default Component;
