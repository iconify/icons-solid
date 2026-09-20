import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e1dxf3bik.css';
import '../../css/z/zru-yu2af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e1dxf3bik"/><path class="zru-yu2af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-arrow-duotone"} {...others} />);
}

export default Component;
