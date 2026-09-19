import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x5fb-ucmr.css';
import '../../css/r/rl6b42m5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x5fb-ucmr"/><path class="rl6b42m5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-warning"} {...others} />);
}

export default Component;
