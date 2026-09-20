import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/k/kr384tway.css';
import '../../css/l/laxg67brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="kr384tway"/><path class="laxg67brp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:form-duotone-line"} {...others} />);
}

export default Component;
