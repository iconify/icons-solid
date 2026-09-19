import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr1jb4bit.css';
import '../../css/b/bu32m9wsb.css';
import '../../css/p/p6__3lblo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kr1jb4bit"/><path class="bu32m9wsb"/><path class="p6__3lblo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:folder-settings"} {...others} />);
}

export default Component;
