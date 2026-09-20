import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/e/e8lq4m.css';
import '../../css/w/wg2sem.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/d/d-bz0ufl.css';
import '../../css/d/d-mi8fnt.css';
import '../../css/d/d-uhwnay.css';
import '../../css/d/d-0z2h2x.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGYnOY2chK"><path class="c5xdmn e8lq4m"/><path class="wg2sem"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGYnOY2chK)" class="botfzx"/><path class="c5xdmn yx0aom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:beer-alt-twotone"} {...others} />);
}

export default Component;
