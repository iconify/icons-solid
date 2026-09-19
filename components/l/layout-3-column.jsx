import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uyt_djohm.css';
import '../../css/v/v1r4qxbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uyt_djohm"/><path class="v1r4qxbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layout-3-column"} {...others} />);
}

export default Component;
