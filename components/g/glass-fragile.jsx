import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b81ikqy8o.css';
import '../../css/w/wfibe_bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b81ikqy8o"/><path class="wfibe_bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:glass-fragile"} {...others} />);
}

export default Component;
