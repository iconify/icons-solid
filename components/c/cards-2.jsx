import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/wyhvm9bid.css';
import '../../css/p/pz3nuqbgk.css';
import '../../css/x/x5v5-j2js.css';
import '../../css/r/r7i66rb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="wyhvm9bid"/><path class="pz3nuqbgk"/><path class="x5v5-j2js"/><path class="r7i66rb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cards-2"} {...others} />);
}

export default Component;
