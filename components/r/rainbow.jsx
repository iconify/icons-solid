import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kj0vnqbvc.css';
import '../../css/c/clly3ubxy.css';
import '../../css/o/o9u649gzc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kj0vnqbvc"/><path class="clly3ubxy"/><path class="o9u649gzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:rainbow"} {...others} />);
}

export default Component;
