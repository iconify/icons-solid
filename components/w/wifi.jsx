import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w2wcp2bjj.css';
import '../../css/z/zyhbq5bxd.css';
import '../../css/e/e4_oyor9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w2wcp2bjj wm-shadow"/><path class="wm-shadow zyhbq5bxd"/><path class="e4_oyor9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wifi"} {...others} />);
}

export default Component;
