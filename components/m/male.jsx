import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vv2dbqbky.css';
import '../../css/g/gl_bwey_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="vv2dbqbky"/><path class="gl_bwey_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:male"} {...others} />);
}

export default Component;
