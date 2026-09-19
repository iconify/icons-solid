import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qt79kinow.css';
import '../../css/d/db-vkwbdy.css';
import '../../css/c/c9-talbxy.css';
import '../../css/a/a9i3e_buh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="qt79kinow"/><path class="db-vkwbdy"/><circle class="c9-talbxy"/><path class="a9i3e_buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vacuum-cleaner"} {...others} />);
}

export default Component;
