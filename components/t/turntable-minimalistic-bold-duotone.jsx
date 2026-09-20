import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_p-gjbri.css';
import '../../css/c/c48cfqbel.css';
import '../../css/s/sfq3-pm0r.css';
import '../../css/p/p_w93idqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i_p-gjbri"/><path class="c48cfqbel"/><path class="sfq3-pm0r"/><path class="p_w93idqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
