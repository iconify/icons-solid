import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny-w6qbwa.css';
import '../../css/i/iw77clbuo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ny-w6qbwa"/><path class="iw77clbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-code-20-bold"} {...others} />);
}

export default Component;
