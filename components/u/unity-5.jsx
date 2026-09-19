import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xx42ebb4r.css';
import '../../css/n/nuox9jb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xx42ebb4r"/><path class="nuox9jb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:unity-5"} {...others} />);
}

export default Component;
