import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btwzuobxo.css';
import '../../css/z/zjwhn7b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="folder-open-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="btwzuobxo"/><path class="zjwhn7b_n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:folder-open-outline"} {...others} />);
}

export default Component;
