import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/i/ir6hycbbm.css';
import '../../css/t/tbm68bcwo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="tqw8k0f0r"/><path class="ir6hycbbm"/><circle class="tbm68bcwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cd"} {...others} />);
}

export default Component;
