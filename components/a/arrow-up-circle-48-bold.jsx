import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/h/hg1lnachy.css';
import '../../css/q/qc_iw4raj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="hg1lnachy"/><path class="qc_iw4raj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-circle-48-bold"} {...others} />);
}

export default Component;
