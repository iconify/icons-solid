import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g995gab3y.css';
import '../../css/p/pkbervbtf.css';
import '../../css/x/x152lqihv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="g995gab3y"/><path class="pkbervbtf"/><circle transform="rotate(-180 10 11)" class="x152lqihv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:s-turn-up"} {...others} />);
}

export default Component;
