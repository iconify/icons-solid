import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yiyxhminr.css';
import '../../css/q/qxh8kgbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yiyxhminr"/><path class="qxh8kgbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:format-square"} {...others} />);
}

export default Component;
