import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rgou05s8k.css';
import '../../css/j/j6s68gugw.css';
import '../../css/c/c6t3c-ate.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rgou05s8k"/><path class="j6s68gugw"/><path class="c6t3c-ate"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-sync"} {...others} />);
}

export default Component;
