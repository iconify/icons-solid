import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0phu2bbs.css';
import '../../css/t/tz5aj022z.css';
import '../../css/g/gchw9w8-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s0phu2bbs"><path class="tz5aj022z"/><path class="gchw9w8-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:copy-bold"} {...others} />);
}

export default Component;
