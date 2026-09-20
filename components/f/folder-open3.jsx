import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/v/vgba34o3n.css';
import '../../css/h/hasbc2bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="vgba34o3n"/><path class="hasbc2bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-open3"} {...others} />);
}

export default Component;
