import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t33c0dq1k.css';
import '../../css/c/co8ya7bph.css';
import '../../css/m/mamjqveeu.css';
import '../../css/z/zq763cbhh.css';
import '../../css/s/sqhrwgg0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t33c0dq1k"/><path class="co8ya7bph"/><path class="mamjqveeu"/><path class="zq763cbhh"/><path class="sqhrwgg0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:team"} {...others} />);
}

export default Component;
