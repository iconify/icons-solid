import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u6p3f_w7t.css';
import '../../css/a/aum9qxb0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u6p3f_w7t"/><path class="aum9qxb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:loading-01"} {...others} />);
}

export default Component;
