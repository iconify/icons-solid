import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z73_a1idh.css';
import '../../css/s/snfvbbcbi.css';
import '../../css/a/ahhodab1f.css';
import '../../css/n/nkjyb5brl.css';
import '../../css/s/ski5i3bxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z73_a1idh"/><path class="snfvbbcbi"/><path class="ahhodab1f"/><path clip-rule="evenodd" class="nkjyb5brl"/><path class="ski5i3bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:firefighter-truck-flat"} {...others} />);
}

export default Component;
