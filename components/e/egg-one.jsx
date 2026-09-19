import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nb0ci_ujs.css';
import '../../css/k/kdubn7zbs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nb0ci_ujs"/><path class="kdubn7zbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:egg-one"} {...others} />);
}

export default Component;
