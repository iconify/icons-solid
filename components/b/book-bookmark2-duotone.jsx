import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekoeeh7wk.css';
import '../../css/m/mkedh2h8p.css';
import '../../css/i/idp4fcl_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ekoeeh7wk"/><path class="mkedh2h8p"/><path class="idp4fcl_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book-bookmark2-duotone"} {...others} />);
}

export default Component;
