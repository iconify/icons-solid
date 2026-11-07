import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0ywq7brl.css';
import '../../css/z/zbrtlabdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p0ywq7brl"/><path class="zbrtlabdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-linear"} {...others} />);
}

export default Component;
