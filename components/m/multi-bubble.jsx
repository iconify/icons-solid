import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/djt3qyt3e.css';
import '../../css/b/b8n4c6biy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="djt3qyt3e"/><path class="b8n4c6biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:multi-bubble"} {...others} />);
}

export default Component;
