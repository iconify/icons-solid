import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v5n78-jtg.css';
import '../../css/d/datni5b3g.css';
import '../../css/v/vv906ftnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v5n78-jtg"/><path class="datni5b3g"/><path class="vv906ftnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rice-bowl"} {...others} />);
}

export default Component;
