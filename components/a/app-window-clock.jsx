import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd4jcubby.css';
import '../../css/v/v-8at_-qw.css';
import '../../css/g/ga66cwd9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gd4jcubby"/><path class="v-8at_-qw"/><path class="ga66cwd9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-clock"} {...others} />);
}

export default Component;
