import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eh74_08tw.css';
import '../../css/j/jy8px0r7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eh74_08tw"/><path class="jy8px0r7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coffee-espresso-machine"} {...others} />);
}

export default Component;
