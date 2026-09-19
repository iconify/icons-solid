import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nedktqbjv.css';
import '../../css/x/xllyvnhhr.css';
import '../../css/u/ug10i-prr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nedktqbjv"/><path clip-rule="evenodd" class="xllyvnhhr"/><path class="ug10i-prr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:attention"} {...others} />);
}

export default Component;
