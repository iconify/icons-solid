import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zz-s87b9p.css';
import '../../css/f/f3qef35pj.css';
import '../../css/d/dt5zzgaeh.css';
import '../../css/n/nzmqz3bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zz-s87b9p"/><path class="f3qef35pj"/><path class="dt5zzgaeh"/><path class="nzmqz3bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-line-duotone"} {...others} />);
}

export default Component;
