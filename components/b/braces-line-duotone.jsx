import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hk7pcsbru.css';
import '../../css/b/by1hc2n7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hk7pcsbru"/><path class="by1hc2n7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:braces-line-duotone"} {...others} />);
}

export default Component;
