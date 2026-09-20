import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1f7v1byd.css';
import '../../css/a/ajkm4g1km.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n1f7v1byd"/><path class="ajkm4g1km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:octagon-x"} {...others} />);
}

export default Component;
