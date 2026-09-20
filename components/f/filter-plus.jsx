import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fjbu-658d.css';
import '../../css/j/jnuf-1vzk.css';
import '../../css/h/hf4qrhc9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fjbu-658d"/><path class="jnuf-1vzk"/><path class="hf4qrhc9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:filter-plus"} {...others} />);
}

export default Component;
