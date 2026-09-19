import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcrdil0dl.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbthfebdn.css';
import '../../css/n/n_xx17adb.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGOksSeCFU" class="mcrdil0dl"/></defs><g class="ft5dv1b6b"><path class="wbthfebdn"/><use href="#SVGOksSeCFU"/><use href="#SVGOksSeCFU" clip-rule="evenodd"/><path class="n_xx17adb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:steering-wheel"} {...others} />);
}

export default Component;
