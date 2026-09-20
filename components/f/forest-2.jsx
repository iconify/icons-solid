import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gsb520u7l.css';
import '../../css/q/q6gd3r-ar.css';
import '../../css/g/gfvuqbcbh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="gsb520u7l"/><path class="q6gd3r-ar"/><path class="gfvuqbcbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:forest-2"} {...others} />);
}

export default Component;
