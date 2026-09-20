import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wmbp6pb5r.css';
import '../../css/w/wz9oz5bbq.css';
import '../../css/v/vbweqjbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wmbp6pb5r"/><path class="wz9oz5bbq"/><path class="vbweqjbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:delivery-drone"} {...others} />);
}

export default Component;
