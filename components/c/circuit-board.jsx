import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nol19vq4t.css';
import '../../css/a/a4ys69bct.css';
import '../../css/h/hzapyruls.css';
import '../../css/a/a6walofgz.css';
import '../../css/u/uwl0krnbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="nol19vq4t"/><path class="a4ys69bct"/><circle class="hzapyruls"/><path class="a6walofgz"/><path class="uwl0krnbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circuit-board"} {...others} />);
}

export default Component;
