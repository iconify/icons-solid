import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri--i_b-k.css';
import '../../css/v/vg2qp3oat.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ri--i_b-k"/><path class="vg2qp3oat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cloud-sun-fill-20"} {...others} />);
}

export default Component;
