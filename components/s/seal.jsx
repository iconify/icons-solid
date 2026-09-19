import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rumis312f.css';
import '../../css/o/o1l3xfb8l.css';
import '../../css/j/j0ba43ftm.css';
import '../../css/y/y36shrfwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rumis312f"/><path class="o1l3xfb8l"/><path class="j0ba43ftm"/><rect class="y36shrfwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:seal"} {...others} />);
}

export default Component;
