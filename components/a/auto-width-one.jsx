import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wi2vo-b-b.css';
import '../../css/z/zy7vm_bhm.css';
import '../../css/c/czqk2mbmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="wi2vo-b-b"/><path class="zy7vm_bhm"/><path class="czqk2mbmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:auto-width-one"} {...others} />);
}

export default Component;
