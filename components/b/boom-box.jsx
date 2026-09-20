import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq-9j1bwk.css';
import '../../css/e/ezhkwibcm.css';
import '../../css/v/vj_1li4id.css';
import '../../css/c/cq3t79bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tq-9j1bwk"/><rect class="ezhkwibcm"/><circle class="vj_1li4id"/><circle class="cq3t79bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:boom-box"} {...others} />);
}

export default Component;
