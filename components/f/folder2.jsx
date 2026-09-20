import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/j/jx_9pv92d.css';
import '../../css/m/m_5zghb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="jx_9pv92d"/><path class="m_5zghb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder2"} {...others} />);
}

export default Component;
