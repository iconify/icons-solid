import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a8lloeb_x.css';
import '../../css/n/nbfrcpb6h.css';
import '../../css/a/abp85p0nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a8lloeb_x"/><path class="nbfrcpb6h wm-a"/><path class="abp85p0nn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reindeer-solid"} {...others} />);
}

export default Component;
