import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdo88m09q.css';
import '../../css/k/k3v_cudyg.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="tdo88m09q"/><path class="k3v_cudyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:stats-up"} {...others} />);
}

export default Component;
