import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx3q3ccpo.css';
import '../../css/v/v4h1cqbwn.css';
import '../../css/a/a-1j1xy1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dx3q3ccpo"/><path class="v4h1cqbwn"/><path clip-rule="evenodd" class="a-1j1xy1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tractor"} {...others} />);
}

export default Component;
