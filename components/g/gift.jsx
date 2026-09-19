import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zavzvmbpq.css';
import '../../css/a/azcxndzqs.css';
import '../../css/k/kgseuybgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="zavzvmbpq"/><path class="azcxndzqs"/><path class="kgseuybgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:gift"} {...others} />);
}

export default Component;
