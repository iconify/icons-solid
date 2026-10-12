import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzfnhqbvm.css';
import '../../css/b/b7ow5c9sc.css';
import '../../css/a/a80jsmv5h.css';
import '../../css/u/u39fewb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jzfnhqbvm"/><path class="b7ow5c9sc"/><path class="a80jsmv5h"/><path class="u39fewb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:swatch-book-duotone"} {...others} />);
}

export default Component;
