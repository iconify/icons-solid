import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/alf80kb3g.css';
import '../../css/y/yfy59ccmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="alf80kb3g"/><path class="yfy59ccmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:forward-15-seconds"} {...others} />);
}

export default Component;
