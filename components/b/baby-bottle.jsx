import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kg2tn5b5e.css';
import '../../css/a/axrmuibbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kg2tn5b5e"/><path class="axrmuibbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:baby-bottle"} {...others} />);
}

export default Component;
