import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unc1vhb8c.css';
import '../../css/j/jxe7zjbqu.css';
import '../../css/i/ijge8ccul.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="unc1vhb8c"/><path class="jxe7zjbqu"/><path class="ijge8ccul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:new-lark"} {...others} />);
}

export default Component;
