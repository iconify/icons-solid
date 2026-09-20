import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3mxu0gkw.css';
import '../../css/s/sgkyp9ubj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j3mxu0gkw"/><path class="sgkyp9ubj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blood-drop"} {...others} />);
}

export default Component;
