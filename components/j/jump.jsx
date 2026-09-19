import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d6abn8_hs.css';
import '../../css/g/gnkx5hbtb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d6abn8_hs"/><circle class="gnkx5hbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:jump"} {...others} />);
}

export default Component;
