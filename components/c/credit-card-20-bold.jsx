import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwtvv7bpf.css';
import '../../css/s/sxyqv-bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fwtvv7bpf"/><path class="sxyqv-bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-20-bold"} {...others} />);
}

export default Component;
