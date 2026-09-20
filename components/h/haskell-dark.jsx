import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/d/dw6sn-5xn.css';
import '../../css/a/al_sr02cy.css';
import '../../css/w/wjxuesbdi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="dw6sn-5xn"/><path class="al_sr02cy"/><path class="wjxuesbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:haskell-dark"} {...others} />);
}

export default Component;
