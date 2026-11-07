import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_2nfzbqz.css';
import '../../css/b/bx1khacep.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gh-zkbf1h.css';
import '../../css/h/hzo2obc3l.css';
import '../../css/z/zhxlol8cy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u_2nfzbqz"/><path class="bx1khacep"/><g class="xtpeb-edw"><path class="gh-zkbf1h"/><path class="hzo2obc3l"/><path class="zhxlol8cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-sun-bold-duotone"} {...others} />);
}

export default Component;
