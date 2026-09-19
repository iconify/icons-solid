import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjp4bv4es.css';
import '../../css/t/tf1f8p1sf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gjp4bv4es"/><path class="tf1f8p1sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rotate-crop"} {...others} />);
}

export default Component;
