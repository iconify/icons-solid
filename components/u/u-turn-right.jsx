import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ytyivubup.css';
import '../../css/g/gieyr613j.css';
import '../../css/j/jwc8ycblh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ytyivubup"/><path class="gieyr613j"/><circle class="jwc8ycblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:u-turn-right"} {...others} />);
}

export default Component;
