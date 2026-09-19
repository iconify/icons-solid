import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpb0q2cet.css';
import '../../css/l/l8k158baf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hpb0q2cet"/><path class="l8k158baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:tv"} {...others} />);
}

export default Component;
