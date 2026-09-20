import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/p4bv4bc-d.css';
import '../../css/s/s79wbqbwh.css';
import '../../css/r/r8ovt4b1d.css';
import '../../css/z/zmeiiibon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="p4bv4bc-d"/><path class="s79wbqbwh"/><path class="r8ovt4b1d"/><path class="zmeiiibon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cupcake"} {...others} />);
}

export default Component;
