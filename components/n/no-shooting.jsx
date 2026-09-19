import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tmngr6b0v.css';
import '../../css/o/o6f548blr.css';
import '../../css/m/mmo-88bcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="tmngr6b0v"/><path class="o6f548blr"/><circle class="mmo-88bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:no-shooting"} {...others} />);
}

export default Component;
