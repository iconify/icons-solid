import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/lagbrq0ki.css';
import '../../css/u/u3b986z9u.css';
import '../../css/o/o44kachjh.css';
import '../../css/t/tld1z7kax.css';
import '../../css/r/r_mtyucdg.css';
import '../../css/i/iguez2bko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="lagbrq0ki"/><path class="u3b986z9u"/><path class="o44kachjh"/><path class="tld1z7kax"/><path class="r_mtyucdg"/><path class="iguez2bko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bone"} {...others} />);
}

export default Component;
