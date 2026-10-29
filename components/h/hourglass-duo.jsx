import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfjr2qb3w.css';
import '../../css/p/p_kl59b1m.css';
import '../../css/j/j90xqmbyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lfjr2qb3w"/><path class="p_kl59b1m"/><path class="j90xqmbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hourglass-duo"} {...others} />);
}

export default Component;
