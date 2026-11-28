import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0g21rfgt.css';
import '../../css/l/lbmbikban.css';
import '../../css/f/fwvwu22pc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m0g21rfgt"/><path class="lbmbikban"/><path class="fwvwu22pc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-down-from-line-duo"} {...others} />);
}

export default Component;
