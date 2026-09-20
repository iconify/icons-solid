import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vjzkqu6tk.css';
import '../../css/n/nu1vehbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vjzkqu6tk"/><path class="nu1vehbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:heart-add"} {...others} />);
}

export default Component;
