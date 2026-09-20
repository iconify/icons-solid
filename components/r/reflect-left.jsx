import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h-ilycbei.css';
import '../../css/g/gvovdbb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h-ilycbei"/><path class="gvovdbb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:reflect-left"} {...others} />);
}

export default Component;
