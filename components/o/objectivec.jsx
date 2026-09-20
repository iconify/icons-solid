import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkd72tfms.css';
import '../../css/q/qjl5pfj7i.css';
import '../../css/l/lkubu127s.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="kkd72tfms"><path class="qjl5pfj7i"/><path class="lkubu127s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:objectivec"} {...others} />);
}

export default Component;
