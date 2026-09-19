import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpo-tqbbu.css';
import '../../css/q/q8d6_qb5x.css';
import '../../css/u/uk2k___8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kpo-tqbbu"/><path class="q8d6_qb5x"/><path class="uk2k___8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:comment-dots-duotone"} {...others} />);
}

export default Component;
