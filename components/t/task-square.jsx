import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/ww9u19b0e.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ww9u19b0e"/><path class="rvymobzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:task-square"} {...others} />);
}

export default Component;
