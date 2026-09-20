import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2yet2bpf.css';
import '../../css/w/wn3ahbbxp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="p2yet2bpf"/><path class="wn3ahbbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-muted-16"} {...others} />);
}

export default Component;
