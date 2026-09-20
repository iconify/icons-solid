import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bl11n5bwk.css';
import '../../css/e/ex3wh7g8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bl11n5bwk"/><path class="ex3wh7g8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:task-list-pin"} {...others} />);
}

export default Component;
