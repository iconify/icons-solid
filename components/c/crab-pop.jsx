import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d61n7zbnc.css';
import '../../css/h/h0f7pcckl.css';
import '../../css/p/paf1s496b.css';
import '../../css/z/zeyhh-b4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="d61n7zbnc"/><path class="h0f7pcckl"/><path clip-rule="evenodd" class="paf1s496b"/><path class="zeyhh-b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:crab-pop"} {...others} />);
}

export default Component;
