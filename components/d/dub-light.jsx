import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpkw48nab.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/p/povdmn7or.css';
import '../../css/y/ydb9zbuwr.css';
import '../../css/o/o7pw7cbjv.css';

const viewBox = {"width":191,"height":191};
const content = `<defs><path id="SVGG1MCTcmd" class="zpkw48nab"/></defs><g class="ft5dv1b6b"><g clip-path="url(#SVGFA4XqeSn)"><use href="#SVGG1MCTcmd"/><mask id="SVGctvJPduc" width="191" height="191" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><use href="#SVGG1MCTcmd"/></mask><g mask="url(#SVGctvJPduc)" class="n1mjunbsu"><circle class="povdmn7or"/><path class="ydb9zbuwr"/></g></g><defs><clipPath id="SVGFA4XqeSn"><path class="o7pw7cbjv"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dub-light"} {...others} />);
}

export default Component;
