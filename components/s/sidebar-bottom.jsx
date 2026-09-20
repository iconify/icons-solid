import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nctiv92jx.css';
import '../../css/c/cq0b-er8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nctiv92jx"/><path class="cq0b-er8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sidebar-bottom"} {...others} />);
}

export default Component;
