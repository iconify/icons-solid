import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lko50jfno.css';
import '../../css/r/rl6b42m5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lko50jfno"/><path class="rl6b42m5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:db-search"} {...others} />);
}

export default Component;
