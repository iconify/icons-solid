import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4rxj1pug.css';
import '../../css/y/yi7of_udj.css';
import '../../css/z/zrehoxbbg.css';
import '../../css/w/wmrno8bgk.css';
import '../../css/i/ibkh1gf4v.css';
import '../../css/o/oe09lqh_m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q4rxj1pug"/><path class="yi7of_udj"/><path class="zrehoxbbg"/><path class="wmrno8bgk"/><path class="ibkh1gf4v"/><path class="oe09lqh_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chiller-20-bold"} {...others} />);
}

export default Component;
