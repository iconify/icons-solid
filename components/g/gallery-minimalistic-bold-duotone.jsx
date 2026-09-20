import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbegpb7cr.css';
import '../../css/h/hu9q9y9ih.css';
import '../../css/r/rxfpo_vyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbegpb7cr"/><path class="hu9q9y9ih"/><path class="rxfpo_vyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
