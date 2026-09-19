import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knnax3buu.css';
import '../../css/v/vbuatlb1w.css';
import '../../css/j/jymfo0b9p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="knnax3buu"/><path class="vbuatlb1w"/><path class="jymfo0b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:batch-job"} {...others} />);
}

export default Component;
