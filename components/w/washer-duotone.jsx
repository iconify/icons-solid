import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwknfdbgo.css';
import '../../css/r/rvpmzysup.css';
import '../../css/z/zafc4__dd.css';
import '../../css/n/nftvv-oek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fwknfdbgo"/><path clip-rule="evenodd" class="rvpmzysup"/><path class="zafc4__dd"/><path class="nftvv-oek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:washer-duotone"} {...others} />);
}

export default Component;
