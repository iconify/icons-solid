import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj41r93vd.css';
import '../../css/n/nfvrmwb9e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj41r93vd"/><path class="nfvrmwb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saw-20-bold"} {...others} />);
}

export default Component;
