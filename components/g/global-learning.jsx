import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n9azjpzid.css';
import '../../css/v/vde40-bzw.css';
import '../../css/h/hj2rnu99s.css';
import '../../css/i/ij28n2bdn.css';
import '../../css/k/km2uuqbrq.css';
import '../../css/r/rci7jrb3g.css';
import '../../css/f/fpqdpce6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n9azjpzid"/><path class="vde40-bzw"/><path class="hj2rnu99s"/><path class="ij28n2bdn"/><path class="km2uuqbrq"/><path class="rci7jrb3g"/><path class="fpqdpce6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:global-learning"} {...others} />);
}

export default Component;
