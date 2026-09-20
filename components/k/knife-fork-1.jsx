import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-b-5jban.css';
import '../../css/q/q9k8bmnxn.css';
import '../../css/b/bpphhjblu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s-b-5jban"/><path class="q9k8bmnxn"/><path class="bpphhjblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:knife-fork-1"} {...others} />);
}

export default Component;
