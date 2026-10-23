import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wcv42nm6b.css';
import '../../css/r/r1qa01bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wcv42nm6b"/><path class="r1qa01bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:graph-hub"} {...others} />);
}

export default Component;
