import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr1jw-bfg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c99v-pbvj.css';
import '../../css/z/zqpr4bbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr1jw-bfg secondary"/><g class="dt0cm9dhy primary"><path class="c99v-pbvj"/><path class="zqpr4bbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:volume-mute-duo"} {...others} />);
}

export default Component;
