import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/x/x3xcykbud.css';
import '../../css/t/t3tcnvjvn.css';
import '../../css/c/chcyqyeuw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="x3xcykbud"/><path class="t3tcnvjvn"/><path class="chcyqyeuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:play-duo"} {...others} />);
}

export default Component;
