import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjzfngbyw.css';
import '../../css/v/v0_9vkbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jjzfngbyw"/><path class="v0_9vkbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-slash"} {...others} />);
}

export default Component;
