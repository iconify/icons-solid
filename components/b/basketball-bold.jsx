import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bd6ig9a2x.css';
import '../../css/b/b-n-y5s-l.css';
import '../../css/d/d5fvesbdz.css';
import '../../css/k/kbu36ebbb.css';
import '../../css/h/h2qxo6bes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bd6ig9a2x"/><path class="b-n-y5s-l"/><path class="d5fvesbdz"/><path class="kbu36ebbb"/><path class="h2qxo6bes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:basketball-bold"} {...others} />);
}

export default Component;
