import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gahgzf5qd.css';
import '../../css/e/e55zwmb-j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gahgzf5qd"/><path class="e55zwmb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-check-20"} {...others} />);
}

export default Component;
