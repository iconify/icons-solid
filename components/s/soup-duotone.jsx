import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwx7j9nww.css';
import '../../css/l/llzh89b2x.css';
import '../../css/f/fk8bs2bho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uwx7j9nww"/><path class="llzh89b2x"/><path class="fk8bs2bho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:soup-duotone"} {...others} />);
}

export default Component;
