import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f9tlwgbvv.css';
import '../../css/f/f0nvj7byr.css';
import '../../css/u/u16ok-b4f.css';
import '../../css/z/zywj4xdxq.css';
import '../../css/e/e_0j03n8e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f9tlwgbvv"/><path class="f0nvj7byr"/><path class="u16ok-b4f"/><path class="zywj4xdxq"/><path class="e_0j03n8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fried-egg-breakfast"} {...others} />);
}

export default Component;
