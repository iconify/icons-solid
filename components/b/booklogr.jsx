import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2bcowb-l.css';
import '../../css/i/i1sbddona.css';
import '../../css/b/bb7p9ybfb.css';
import '../../css/i/ioqkhfb3p.css';
import '../../css/g/g320chzxz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k2bcowb-l"/><path class="i1sbddona"/><path class="bb7p9ybfb"/><path class="ioqkhfb3p"/><path class="g320chzxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:booklogr"} {...others} />);
}

export default Component;
