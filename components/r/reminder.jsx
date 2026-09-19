import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dye8fz2in.css';
import '../../css/h/h0jbmubck.css';
import '../../css/t/tawp0wban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dye8fz2in"/><path class="h0jbmubck"/><path class="tawp0wban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:reminder"} {...others} />);
}

export default Component;
