import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aiwtk8anj.css';
import '../../css/n/nlfkj4bba.css';
import '../../css/p/p11u98kit.css';
import '../../css/n/nt93-ac0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="aiwtk8anj"/><path class="nlfkj4bba"/><path class="p11u98kit"/><path class="nt93-ac0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-sharepoint-logo"} {...others} />);
}

export default Component;
