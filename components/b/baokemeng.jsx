import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3p1ybc1b.css';
import '../../css/b/bfaknubvb.css';
import '../../css/f/f6_uaj4ma.css';
import '../../css/g/gdphixb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="e3p1ybc1b"><path class="bfaknubvb"/><path class="f6_uaj4ma"/><path class="gdphixb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baokemeng"} {...others} />);
}

export default Component;
