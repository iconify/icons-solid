import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eup7q5r0k.css';
import '../../css/s/swzvg8b8g.css';
import '../../css/m/mf08bkvgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="eup7q5r0k wm-shadow"/><path class="swzvg8b8g wm-shadow"/><path class="mf08bkvgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:circle-dashed"} {...others} />);
}

export default Component;
