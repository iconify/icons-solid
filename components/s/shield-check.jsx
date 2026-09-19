import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y2mn37b7a.css';
import '../../css/v/vt6fgp66q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y2mn37b7a"/><path class="vt6fgp66q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shield-check"} {...others} />);
}

export default Component;
