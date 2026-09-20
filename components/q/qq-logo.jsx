import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/on0uy8i1s.css';
import '../../css/r/ry1_soj-o.css';
import '../../css/h/h1kjssb6d.css';
import '../../css/p/pybetgb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="on0uy8i1s"/><path class="ry1_soj-o"/><path class="h1kjssb6d"/><path class="pybetgb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:qq-logo"} {...others} />);
}

export default Component;
