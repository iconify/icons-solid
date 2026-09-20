import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xq10pbcra.css';
import '../../css/z/z-b8tkbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xq10pbcra"/><path class="z-b8tkbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bible"} {...others} />);
}

export default Component;
