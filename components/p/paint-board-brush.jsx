import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-v5m5bei.css';
import '../../css/d/dkex24b3a.css';
import '../../css/r/rp4gnlp6t.css';
import '../../css/g/garxj2xng.css';
import '../../css/w/w6jnvlk6r.css';
import '../../css/m/mxgol_7cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-v5m5bei"/><path class="dkex24b3a"/><path class="rp4gnlp6t"/><path class="garxj2xng"/><path class="w6jnvlk6r"/><path class="mxgol_7cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paint-board-brush"} {...others} />);
}

export default Component;
