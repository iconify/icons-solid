import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z4gla85ro.css';
import '../../css/d/d6rjz8b6d.css';
import '../../css/k/kmzp8bb_p.css';
import '../../css/t/tewkg6wrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="z4gla85ro"/><path class="d6rjz8b6d"/><circle class="kmzp8bb_p"/><path class="tewkg6wrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:robot-two"} {...others} />);
}

export default Component;
