import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bgvnp7bwn.css';
import '../../css/l/l-14dvb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="bgvnp7bwn"/><path class="l-14dvb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:programming-css3"} {...others} />);
}

export default Component;
