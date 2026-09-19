import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2g63cekk.css';
import '../../css/h/hm4-mmydo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u2g63cekk"/><path class="hm4-mmydo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-dailymotion"} {...others} />);
}

export default Component;
