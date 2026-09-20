import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwpsgcz9o.css';
import '../../css/u/u70rrcbek.css';
import '../../css/o/oe0ihcctg.css';
import '../../css/o/o75fq_bgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iwpsgcz9o"/><path class="u70rrcbek"/><path class="oe0ihcctg"/><path class="o75fq_bgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-bold-duotone"} {...others} />);
}

export default Component;
