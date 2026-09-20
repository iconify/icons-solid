import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mho6qfb0d.css';
import '../../css/a/aw_5gdmdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mho6qfb0d"/><path class="aw_5gdmdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cd-playing"} {...others} />);
}

export default Component;
