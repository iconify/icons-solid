import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/ymesfvjia.css';
import '../../css/f/fvp-2kb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ymesfvjia"/><path class="fvp-2kb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shovel-rake"} {...others} />);
}

export default Component;
