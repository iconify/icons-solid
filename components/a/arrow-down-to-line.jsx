import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p7-ogkgpo.css';
import '../../css/h/hb6jkcb9k.css';
import '../../css/p/p86qfqb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="p7-ogkgpo wm-shadow"/><path class="hb6jkcb9k wm-shadow"/><path class="p86qfqb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-down-to-line"} {...others} />);
}

export default Component;
