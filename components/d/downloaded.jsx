import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mq23_lbqv.css';
import '../../css/b/b2t_-1bzm.css';
import '../../css/g/gqreh8bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mq23_lbqv"/><path clip-rule="evenodd" class="b2t_-1bzm"/><path class="gqreh8bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:downloaded"} {...others} />);
}

export default Component;
