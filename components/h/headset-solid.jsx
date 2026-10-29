import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/keg_p2rql.css';
import '../../css/p/pmx023bby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="keg_p2rql"/><path class="pmx023bby wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headset-solid"} {...others} />);
}

export default Component;
