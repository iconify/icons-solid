import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m1t32eo2u.css';
import '../../css/p/pdldxnb-u.css';
import '../../css/n/nfyqixscy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="m1t32eo2u"/><path class="pdldxnb-u wm-a"/><path class="nfyqixscy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-solid"} {...others} />);
}

export default Component;
