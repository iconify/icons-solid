import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttzqr1_gg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ttzqr1_gg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:chain-barrier"} {...others} />);
}

export default Component;
