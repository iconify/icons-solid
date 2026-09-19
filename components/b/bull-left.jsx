import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5py72b_c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t5py72b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bull-left"} {...others} />);
}

export default Component;
