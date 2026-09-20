import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev5cacc9t.css';
import '../../css/h/hik1crb5o.css';
import '../../css/t/tq4_0rbyy.css';
import '../../css/u/u6j01ibum.css';
import '../../css/m/mj8gnep4m.css';

const viewBox = {"width":85.57,"height":88.6};
const content = `<path class="ev5cacc9t"/><path class="hik1crb5o"/><path class="tq4_0rbyy"/><path class="u6j01ibum"/><path class="mj8gnep4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:qatar-energy"} {...others} />);
}

export default Component;
