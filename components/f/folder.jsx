import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k56zh769s.css';
import '../../css/u/um227vekh.css';
import '../../css/t/tm9f74uep.css';
import '../../css/j/j2m8g8spq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="k56zh769s"/><path class="um227vekh"/><circle class="tm9f74uep"/><path class="j2m8g8spq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder"} {...others} />);
}

export default Component;
