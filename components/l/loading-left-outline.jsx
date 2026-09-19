import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nzacwof9r.css';
import '../../css/o/o7kac3b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="loadgin-left-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="nzacwof9r"/><path class="o7kac3b2m"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:loading-left-outline"} {...others} />);
}

export default Component;
