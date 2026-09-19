import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e10_y93bm.css';
import '../../css/o/owxmh-bon.css';
import '../../css/v/v6oej2b3p.css';
import '../../css/g/gnc1igdxe.css';
import '../../css/w/wentdhbnh.css';
import '../../css/u/uf7xz3bww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="e10_y93bm"/><path class="owxmh-bon"/><path class="v6oej2b3p"/><path class="gnc1igdxe"/><path class="wentdhbnh"/><path class="uf7xz3bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tree-two"} {...others} />);
}

export default Component;
