import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/ulv8ns-jt.css';
import '../../css/s/s53vmbcgz.css';
import '../../css/d/drf7uhb7i.css';
import '../../css/h/hhf5g-bzn.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG5fPdudBK"><mask id="SVGTGBsVcVX" class="n1mjunbsu"><path class="ulv8ns-jt"/></mask><g class="s53vmbcgz"><path mask="url(#SVGTGBsVcVX)" class="drf7uhb7i"/><path class="hhf5g-bzn"/></g></mask></defs><path mask="url(#SVG5fPdudBK)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-dublicate-duotone-line"} {...others} />);
}

export default Component;
