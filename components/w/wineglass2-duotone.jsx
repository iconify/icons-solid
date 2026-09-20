import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5_tpjb1f.css';
import '../../css/m/mry6cbiat.css';
import '../../css/f/f5ytixb_q.css';
import '../../css/c/cjkh2u5cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w5_tpjb1f"/><path clip-rule="evenodd" class="mry6cbiat"/><path class="f5ytixb_q"/><path class="cjkh2u5cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wineglass2-duotone"} {...others} />);
}

export default Component;
