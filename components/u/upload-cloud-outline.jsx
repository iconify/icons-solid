import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glvsanvuf.css';
import '../../css/a/aky8nga1z.css';
import '../../css/i/i7d1g526i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="upload-cloud-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="glvsanvuf"/><path class="aky8nga1z"/><path class="i7d1g526i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:upload-cloud-outline"} {...others} />);
}

export default Component;
