import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fhdut-j1i.css';
import '../../css/f/f80ucki7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="fhdut-j1i"/><path class="f80ucki7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:timer"} {...others} />);
}

export default Component;
