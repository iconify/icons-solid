import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/u6g1rqbim.css';
import '../../css/h/hbs0o7bdl.css';
import '../../css/i/igv4w83qw.css';
import '../../css/w/w6aoc6bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="u6g1rqbim"/><path class="hbs0o7bdl"/><path class="igv4w83qw"/><path class="w6aoc6bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-edit-robot"} {...others} />);
}

export default Component;
