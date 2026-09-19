import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1fh6ob9q.css';
import '../../css/a/abm9--b-s.css';
import '../../css/p/p977-7btl.css';
import '../../css/d/deok14b5g.css';
import '../../css/v/v9kl8px4d.css';
import '../../css/z/zdwwobb_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e1fh6ob9q"/><path class="abm9--b-s"/><path class="p977-7btl"/><path class="deok14b5g"/><path class="v9kl8px4d"/><path class="zdwwobb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:anti-corrosion"} {...others} />);
}

export default Component;
