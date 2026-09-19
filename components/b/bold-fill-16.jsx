import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec_1s8bpf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ec_1s8bpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bold-fill-16"} {...others} />);
}

export default Component;
