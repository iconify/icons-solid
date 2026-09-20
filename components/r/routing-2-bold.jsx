import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5fkynbrb.css';
import '../../css/f/fgvk_fggm.css';
import '../../css/s/s0s2anbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d5fkynbrb"/><path class="fgvk_fggm"/><path clip-rule="evenodd" class="s0s2anbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-bold"} {...others} />);
}

export default Component;
