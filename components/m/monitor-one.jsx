import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iso-sy05t.css';
import '../../css/r/r2_2dlbjg.css';
import '../../css/l/l4y0xgwkr.css';
import '../../css/y/y19va-bzo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iso-sy05t"/><path class="r2_2dlbjg"/><circle class="l4y0xgwkr"/><path class="y19va-bzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monitor-one"} {...others} />);
}

export default Component;
