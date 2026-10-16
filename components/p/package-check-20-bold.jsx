import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef7q9ccnq.css';
import '../../css/n/nlzn_o26i.css';
import '../../css/v/v1o3w1bgh.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ef7q9ccnq"/><path class="nlzn_o26i"/><path class="v1o3w1bgh"/><path class="sh06c0bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-check-20-bold"} {...others} />);
}

export default Component;
