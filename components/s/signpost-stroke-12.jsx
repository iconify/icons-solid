import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szy1_ul7k.css';
import '../../css/f/fgrg7ftet.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="szy1_ul7k"/><path class="fgrg7ftet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:signpost-stroke-12"} {...others} />);
}

export default Component;
