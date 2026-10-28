import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9l6nbc1k.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/y/yai-vccpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i9l6nbc1k"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><path class="yai-vccpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:workflow-plus"} {...others} />);
}

export default Component;
