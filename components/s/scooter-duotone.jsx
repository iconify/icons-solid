import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygrbvktgc.css';
import '../../css/p/pk73xqwph.css';
import '../../css/u/ui2vj1xuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ygrbvktgc"/><path class="pk73xqwph"/><path class="ui2vj1xuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scooter-duotone"} {...others} />);
}

export default Component;
