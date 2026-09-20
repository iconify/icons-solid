import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/u/uplt5e.css';
import '../../css/l/ll91xo.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGloDKZdWy"><path class="c5xdmn uplt5e"/><path class="ll91xo"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGloDKZdWy)" class="botfzx"/><path class="c5xdmn yx0aom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:beer-twotone"} {...others} />);
}

export default Component;
