import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fm3ditb9p.css';
import '../../css/l/lhfm-abhu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fm3ditb9p"/><circle class="lhfm-abhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stapler"} {...others} />);
}

export default Component;
