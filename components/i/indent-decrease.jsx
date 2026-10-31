import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n1qktjb3p.css';
import '../../css/t/txjglpbqa.css';
import '../../css/s/sfhxn_bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n1qktjb3p wm-shadow"/><path class="txjglpbqa wm-shadow"/><path class="sfhxn_bcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:indent-decrease"} {...others} />);
}

export default Component;
