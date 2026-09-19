import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/matslfbya.css';
import '../../css/b/b1ecs5fbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="matslfbya"/><path class="b1ecs5fbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-terminal"} {...others} />);
}

export default Component;
