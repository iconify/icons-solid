import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0d20pbmo.css';
import '../../css/o/owoni5tju.css';
import '../../css/w/w8dto046u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r0d20pbmo"/><path class="owoni5tju"/><path class="w8dto046u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layer-arrow-up"} {...others} />);
}

export default Component;
