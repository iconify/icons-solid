import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc7jdzbqu.css';
import '../../css/k/ke5swub4s.css';
import '../../css/x/x3a30sb5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nc7jdzbqu"/><path class="ke5swub4s"/><path clip-rule="evenodd" class="x3a30sb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:go-backward-30"} {...others} />);
}

export default Component;
