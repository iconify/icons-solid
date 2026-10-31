import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/thyoeqb5j.css';
import '../../css/e/e8mfh5myc.css';
import '../../css/m/mbl7yg2xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="thyoeqb5j wm-shadow"/><path class="e8mfh5myc wm-shadow"/><path class="mbl7yg2xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-ordered"} {...others} />);
}

export default Component;
