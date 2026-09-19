import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sd5pw-b8u.css';
import '../../css/m/mitl-8btu.css';
import '../../css/p/pod1yswni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sd5pw-b8u"/><path class="mitl-8btu"/><path class="pod1yswni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:learning"} {...others} />);
}

export default Component;
