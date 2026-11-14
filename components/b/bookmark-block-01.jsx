import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qks_mnb9t.css';
import '../../css/i/iu45szbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qks_mnb9t"/><path class="iu45szbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-block-01"} {...others} />);
}

export default Component;
