import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s4ecatbza.css';
import '../../css/a/agdtmdb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="open-book-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="s4ecatbza"/><path class="agdtmdb_i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:open-book-outline"} {...others} />);
}

export default Component;
