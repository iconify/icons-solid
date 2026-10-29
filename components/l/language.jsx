import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bail9yl5d.css';
import '../../css/b/b3ouqbcbv.css';
import '../../css/z/zr2h3jbqe.css';
import '../../css/f/fxnht-bng.css';
import '../../css/i/i23igd-fw.css';
import '../../css/b/bgjfcp78h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bail9yl5d wm-shadow"/><path class="b3ouqbcbv"/><path class="zr2h3jbqe"/><path class="fxnht-bng"/><path class="i23igd-fw wm-shine"/><path class="bgjfcp78h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:language"} {...others} />);
}

export default Component;
