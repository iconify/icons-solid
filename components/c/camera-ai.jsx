import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dx3djob0r.css';
import '../../css/k/krc89nbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dx3djob0r"/><path class="krc89nbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-ai"} {...others} />);
}

export default Component;
