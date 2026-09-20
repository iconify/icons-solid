import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g0ogi8j0m.css';
import '../../css/r/rutf0mn2v.css';
import '../../css/z/zgreudcfh.css';
import '../../css/o/o8zdn7b1d.css';
import '../../css/m/m1-dq-43a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g0ogi8j0m"/><path class="rutf0mn2v"/><path class="zgreudcfh"/><path class="o8zdn7b1d"/><path class="m1-dq-43a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:critical-thinking-2"} {...others} />);
}

export default Component;
