import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkp1ythty.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rkp1ythty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:triangle-down-hollow"} {...others} />);
}

export default Component;
