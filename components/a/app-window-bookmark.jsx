import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qonxbbjwm.css';
import '../../css/t/t3vymhb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qonxbbjwm"/><path class="t3vymhb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-bookmark"} {...others} />);
}

export default Component;
