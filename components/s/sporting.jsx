import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8r7mgbbj.css';
import '../../css/s/stjoksb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="r8r7mgbbj"/><path class="stjoksb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sporting"} {...others} />);
}

export default Component;
