import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/az0b6nhta.css';
import '../../css/c/c8bgg3unk.css';
import '../../css/k/k--rt-b3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="az0b6nhta"/><path class="c8bgg3unk"/><path class="k--rt-b3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:user-cog"} {...others} />);
}

export default Component;
