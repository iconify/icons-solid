import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji42yobsw.css';
import '../../css/v/v-10cxbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ji42yobsw"/><path class="v-10cxbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:tablet"} {...others} />);
}

export default Component;
