import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/a/auxk0ec3j.css';
import '../../css/r/rpsvq3bma.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="auxk0ec3j"/><path class="rpsvq3bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:arrow-down"} {...others} />);
}

export default Component;
