import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gl1t1yb0q.css';
import '../../css/c/cxmz7h75w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gl1t1yb0q"/><path class="cxmz7h75w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-off-two-tone"} {...others} />);
}

export default Component;
