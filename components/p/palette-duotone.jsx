import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9tcbvs3n.css';
import '../../css/f/fn9on300s.css';
import '../../css/h/hdqah4lam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r9tcbvs3n"/><path class="fn9on300s"/><path class="hdqah4lam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:palette-duotone"} {...others} />);
}

export default Component;
