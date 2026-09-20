import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s975i_r_c.css';
import '../../css/f/fcnb99bqx.css';
import '../../css/x/xtm6vebaa.css';
import '../../css/a/as2ho8ond.css';
import '../../css/m/mff4gkbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s975i_r_c"/><path class="fcnb99bqx"/><path class="xtm6vebaa"/><path class="as2ho8ond"/><path class="mff4gkbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:figma-duotone"} {...others} />);
}

export default Component;
