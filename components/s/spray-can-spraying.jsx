import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqd95lbbt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kqd95lbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:spray-can-spraying"} {...others} />);
}

export default Component;
