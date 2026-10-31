import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu71zvknf.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/om60bcbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qu71zvknf wm-k"/><circle class="h_tsn8bxt wm-a"/><path class="om60bcbeq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:api-gloss"} {...others} />);
}

export default Component;
