import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/w/w-6yckbxi.css';
import '../../css/j/jx_9pv92d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="w-6yckbxi"/><path class="jx_9pv92d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-add3"} {...others} />);
}

export default Component;
