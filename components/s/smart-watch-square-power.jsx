import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyqlr6bgu.css';
import '../../css/w/ww4iwb9bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eyqlr6bgu"/><path class="ww4iwb9bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-watch-square-power"} {...others} />);
}

export default Component;
