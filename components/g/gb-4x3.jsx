import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk6pn2brg.css';
import '../../css/q/qk5jxxbpp.css';
import '../../css/p/pb9imdbxu.css';
import '../../css/u/u_g0ji_te.css';
import '../../css/h/hwmfjmbkc.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="tk6pn2brg"/><path class="qk5jxxbpp"/><path class="pb9imdbxu"/><path class="u_g0ji_te"/><path class="hwmfjmbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-4x3"} {...others} />);
}

export default Component;
