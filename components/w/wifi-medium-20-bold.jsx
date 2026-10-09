import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1e83_bpf.css';
import '../../css/q/qmfyblb1l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x1e83_bpf"/><path class="qmfyblb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-medium-20-bold"} {...others} />);
}

export default Component;
