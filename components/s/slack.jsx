import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kt3m78bup.css';
import '../../css/h/hifcjli-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kt3m78bup"/><path class="hifcjli-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:slack"} {...others} />);
}

export default Component;
