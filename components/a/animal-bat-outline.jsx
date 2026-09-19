import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/icugcnb8z.css';
import '../../css/a/a_0qcoh5r.css';
import '../../css/u/uyir3ybrn.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="icugcnb8z"/><path class="a_0qcoh5r"/><path class="uyir3ybrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:animal-bat-outline"} {...others} />);
}

export default Component;
