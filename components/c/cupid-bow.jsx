import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i4j6zo-xu.css';
import '../../css/h/hkrckrxuc.css';
import '../../css/t/tc0gqmbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i4j6zo-xu wm-shadow"/><path class="hkrckrxuc wm-shadow"/><path class="tc0gqmbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cupid-bow"} {...others} />);
}

export default Component;
