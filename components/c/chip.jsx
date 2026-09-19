import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t33e60pja.css';
import '../../css/m/mtcvzm4un.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="t33e60pja"/><path class="mtcvzm4un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chip"} {...others} />);
}

export default Component;
