import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqjsn9bct.css';
import '../../css/x/xryd7hl0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqjsn9bct"/><path class="xryd7hl0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-key"} {...others} />);
}

export default Component;
