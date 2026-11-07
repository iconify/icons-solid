import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2rxlk3sw.css';
import '../../css/j/jlkx21byw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c2rxlk3sw"/><path class="jlkx21byw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-line-duotone"} {...others} />);
}

export default Component;
