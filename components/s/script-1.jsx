import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/c4ks21rmq.css';
import '../../css/k/kvh9ngb5d.css';
import '../../css/u/u2xcxj5go.css';
import '../../css/e/eh063druj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="c4ks21rmq"/><path class="kvh9ngb5d"/><path class="u2xcxj5go"/><path class="eh063druj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:script-1"} {...others} />);
}

export default Component;
