import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfbi3mbkc.css';
import '../../css/v/vs45rqbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfbi3mbkc"/><path clip-rule="evenodd" class="vs45rqbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:government-fill"} {...others} />);
}

export default Component;
