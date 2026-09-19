import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/w/w3ezambji.css';
import '../../css/t/t-i8bxbmj.css';
import '../../css/t/t-ukfjiuk.css';
import '../../css/j/j_kq8ujwj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="w3ezambji"/><path class="t-i8bxbmj"/><path class="t-ukfjiuk"/><path class="j_kq8ujwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:f-n-key"} {...others} />);
}

export default Component;
