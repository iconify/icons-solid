import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ut3m-xgzx.css';
import '../../css/z/zzysabe-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ut3m-xgzx"/><path class="zzysabe-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:album-carousel"} {...others} />);
}

export default Component;
