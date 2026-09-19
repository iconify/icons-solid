import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/b-593qbqw.css';
import '../../css/x/xux_17e-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="b-593qbqw"/><path class="xux_17e-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:enquire"} {...others} />);
}

export default Component;
