import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9bf_6m2p.css';
import '../../css/p/pandl9bpw.css';
import '../../css/a/at4hegbfq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g9bf_6m2p"/><path class="pandl9bpw"/><path class="at4hegbfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:s-turn-up"} {...others} />);
}

export default Component;
