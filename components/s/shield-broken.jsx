import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9n6fjbyb.css';
import '../../css/v/vt6fgp66q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w9n6fjbyb"/><path class="vt6fgp66q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shield-broken"} {...others} />);
}

export default Component;
