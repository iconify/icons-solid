import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oir8vpbxa.css';
import '../../css/c/cpcvcqb5t.css';
import '../../css/w/w-o1zsb7d.css';
import '../../css/i/io9dsz-xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oir8vpbxa wm-a"/><path class="cpcvcqb5t wm-a"/><path class="w-o1zsb7d wm-k"/><path class="io9dsz-xx wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:medal"} {...others} />);
}

export default Component;
