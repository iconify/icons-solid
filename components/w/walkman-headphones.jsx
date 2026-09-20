import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x6_8z3bmx.css';
import '../../css/k/krrrpj-8w.css';
import '../../css/u/upztnfbus.css';
import '../../css/p/pcwjrzb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x6_8z3bmx"/><path class="krrrpj-8w"/><path class="upztnfbus"/><path class="pcwjrzb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:walkman-headphones"} {...others} />);
}

export default Component;
