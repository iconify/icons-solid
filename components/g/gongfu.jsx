import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u-du--bfm.css';
import '../../css/f/f62cqfb1v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="u-du--bfm"/><path class="f62cqfb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gongfu"} {...others} />);
}

export default Component;
