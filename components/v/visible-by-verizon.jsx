import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s42bbq7uz.css';
import '../../css/d/do2_d_k7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s42bbq7uz"/><path class="do2_d_k7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visible-by-verizon"} {...others} />);
}

export default Component;
