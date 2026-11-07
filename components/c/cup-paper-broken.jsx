import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bfgxkdqwj.css';
import '../../css/k/kdm5jlb9n.css';
import '../../css/a/a0v16pbgz.css';
import '../../css/f/f_-iarb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bfgxkdqwj"/><path class="kdm5jlb9n"/><path class="a0v16pbgz"/><path class="f_-iarb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-broken"} {...others} />);
}

export default Component;
