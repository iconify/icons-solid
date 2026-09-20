import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqcq2lvft.css';
import '../../css/q/qe5rklg2p.css';
import '../../css/m/m3qn-my9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqcq2lvft"/><path class="qe5rklg2p"/><path class="m3qn-my9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-cog-outline"} {...others} />);
}

export default Component;
