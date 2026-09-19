import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdziatdzg.css';
import '../../css/r/r_w95gdro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdziatdzg"/><path class="r_w95gdro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-stroke-circle-half"} {...others} />);
}

export default Component;
