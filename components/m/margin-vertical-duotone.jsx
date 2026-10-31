import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft9nhnbbu.css';
import '../../css/p/ph1021bnv.css';
import '../../css/r/rzdgj4bei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ft9nhnbbu"/><path class="ph1021bnv"/><path class="rzdgj4bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:margin-vertical-duotone"} {...others} />);
}

export default Component;
