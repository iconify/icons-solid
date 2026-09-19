import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/shsp_xb_i.css';
import '../../css/g/ghb_84b2f.css';
import '../../css/j/jgj6o_1pm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="shsp_xb_i"/><path class="ghb_84b2f"/><path class="jgj6o_1pm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:facial-cleanser"} {...others} />);
}

export default Component;
