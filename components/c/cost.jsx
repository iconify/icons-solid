import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1m411eeg.css';
import '../../css/x/x4pv4iirw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k1m411eeg"/><path class="x4pv4iirw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cost"} {...others} />);
}

export default Component;
