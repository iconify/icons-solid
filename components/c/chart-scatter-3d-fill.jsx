import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wwi8mac-d.css';
import '../../css/d/d537sub7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wwi8mac-d"/><path class="d537sub7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-scatter-3d-fill"} {...others} />);
}

export default Component;
