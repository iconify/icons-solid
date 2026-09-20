import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bw87y6lvh.css';
import '../../css/q/qeljfxiuc.css';
import '../../css/g/g2axgwbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bw87y6lvh"/><path class="qeljfxiuc"/><path class="g2axgwbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bull-head"} {...others} />);
}

export default Component;
