import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0x8xlzqx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s0x8xlzqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:lightning-box-solid"} {...others} />);
}

export default Component;
