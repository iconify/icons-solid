import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7n48pb0g.css';
import '../../css/r/rsb7njq1k.css';
import '../../css/n/n5e_5ckrg.css';
import '../../css/h/hwxxyv9_n.css';
import '../../css/y/yoh2rt8ms.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a7n48pb0g"/><path class="rsb7njq1k"/><path class="n5e_5ckrg"/><path class="hwxxyv9_n"/><path class="yoh2rt8ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:drakkar-pop"} {...others} />);
}

export default Component;
