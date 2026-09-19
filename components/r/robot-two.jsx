import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z-3dhhb_i.css';
import '../../css/h/hmvldzbaf.css';
import '../../css/t/tewkg6wrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="z-3dhhb_i"/><circle class="hmvldzbaf"/><path class="tewkg6wrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:robot-two"} {...others} />);
}

export default Component;
