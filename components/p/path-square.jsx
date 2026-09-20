import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkahad8hq.css';
import '../../css/x/xd0yqnjqw.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kkahad8hq"/><path class="xd0yqnjqw"/><path class="rvymobzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:path-square"} {...others} />);
}

export default Component;
