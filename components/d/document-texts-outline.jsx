import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c7f814b6z.css';
import '../../css/n/n3lzwnbxe.css';
import '../../css/w/w8-75c1_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="document-texts-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="c7f814b6z"/><path class="n3lzwnbxe"/><path class="w8-75c1_i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:document-texts-outline"} {...others} />);
}

export default Component;
