import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sss_nfbgc.css';
import '../../css/b/bztkctbob.css';
import '../../css/m/m-wjl1bwa.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="sss_nfbgc"><path class="bztkctbob"/><path class="m-wjl1bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:simplify"} {...others} />);
}

export default Component;
