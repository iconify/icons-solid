import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p61fjvbup.css';
import '../../css/k/k4kf9d06i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="p61fjvbup"/><path class="k4kf9d06i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:iphone"} {...others} />);
}

export default Component;
