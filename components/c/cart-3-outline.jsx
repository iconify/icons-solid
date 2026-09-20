import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxwk-rpea.css';
import '../../css/h/huem-8yil.css';
import '../../css/o/o2slzjb_e.css';
import '../../css/b/bigv9mbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gxwk-rpea"/><path class="huem-8yil"/><path class="o2slzjb_e"/><path clip-rule="evenodd" class="bigv9mbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-outline"} {...others} />);
}

export default Component;
