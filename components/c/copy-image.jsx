import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qagc1qa8v.css';
import '../../css/s/sicbtiqev.css';
import '../../css/a/a1hf6cbte.css';
import '../../css/t/ts9smabjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qagc1qa8v"/><rect class="sicbtiqev"/><circle class="a1hf6cbte"/><path class="ts9smabjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:copy-image"} {...others} />);
}

export default Component;
