import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ais76dbwa.css';
import '../../css/m/m8ppx3bcm.css';
import '../../css/f/fr7roj4sj.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ais76dbwa"/><path class="m8ppx3bcm"/><path class="fr7roj4sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:occupational-therapy"} {...others} />);
}

export default Component;
