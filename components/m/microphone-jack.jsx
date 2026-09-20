import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zs160ef1r.css';
import '../../css/b/boyzpbbgo.css';
import '../../css/u/u2nr6gbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zs160ef1r"/><path class="boyzpbbgo"/><path class="u2nr6gbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:microphone-jack"} {...others} />);
}

export default Component;
