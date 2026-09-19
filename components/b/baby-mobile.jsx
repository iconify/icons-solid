import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m-w6wgbel.css';
import '../../css/e/e0ym9q64n.css';
import '../../css/h/hynvvbbxd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="m-w6wgbel"/><circle class="e0ym9q64n"/><path class="hynvvbbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-mobile"} {...others} />);
}

export default Component;
