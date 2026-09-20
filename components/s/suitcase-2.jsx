import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yg31gvb8a.css';
import '../../css/o/opt2h2bot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yg31gvb8a"/><rect class="opt2h2bot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suitcase-2"} {...others} />);
}

export default Component;
