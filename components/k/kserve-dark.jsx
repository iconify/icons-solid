import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljw_3tj1h.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ljw_3tj1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kserve-dark"} {...others} />);
}

export default Component;
