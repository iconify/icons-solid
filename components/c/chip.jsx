import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/ncz8bbc_a.css';
import '../../css/m/mtcvzm4un.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="ncz8bbc_a"/><path class="mtcvzm4un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chip"} {...others} />);
}

export default Component;
