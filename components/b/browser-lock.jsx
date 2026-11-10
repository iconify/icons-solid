import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swmwxq7rt.css';
import '../../css/z/zrz4k_4mn.css';
import '../../css/b/bfamufl7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="swmwxq7rt"/><path class="zrz4k_4mn"/><path class="bfamufl7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-lock"} {...others} />);
}

export default Component;
