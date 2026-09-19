import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lz-hcebdc.css';
import '../../css/z/z5vg-4b9h.css';
import '../../css/x/xg7n4uyju.css';
import '../../css/j/juozt884x.css';
import '../../css/a/awmrz__2f.css';
import '../../css/p/po-cplmoq.css';
import '../../css/j/j7bkdqbrm.css';
import '../../css/p/pey3tqb4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lz-hcebdc"/><path clip-rule="evenodd" class="z5vg-4b9h"/><path class="xg7n4uyju"/><path clip-rule="evenodd" class="juozt884x"/><path class="awmrz__2f"/><path clip-rule="evenodd" class="po-cplmoq"/><path class="j7bkdqbrm"/><path clip-rule="evenodd" class="pey3tqb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:interoperability"} {...others} />);
}

export default Component;
