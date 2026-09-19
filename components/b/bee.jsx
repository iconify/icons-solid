import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mco94iian.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/g/g7668_b1z.css';
import '../../css/d/dyisvyq3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mco94iian"/><path class="b7xcik0eh"/><rect class="g7668_b1z"/><path class="dyisvyq3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bee"} {...others} />);
}

export default Component;
