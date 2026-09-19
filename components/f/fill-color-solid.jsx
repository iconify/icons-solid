import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqkfeobqj.css';
import '../../css/e/e81n7dqey.css';
import '../../css/b/bo7xhxbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hqkfeobqj"/><path class="e81n7dqey"/><path clip-rule="evenodd" class="bo7xhxbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fill-color-solid"} {...others} />);
}

export default Component;
