import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqmmxtbol.css';
import '../../css/w/w95mvmj8u.css';
import '../../css/r/roz1z-bss.css';
import '../../css/c/czh-er49n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qqmmxtbol"/><path class="w95mvmj8u"/><path class="roz1z-bss"/><circle class="czh-er49n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shrimp"} {...others} />);
}

export default Component;
