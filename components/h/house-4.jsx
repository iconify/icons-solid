import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgcjijb2g.css';
import '../../css/w/wbc3phs4w.css';
import '../../css/v/vpdzi0qwo.css';
import '../../css/i/ice5a2nwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgcjijb2g"/><path class="wbc3phs4w"/><path class="vpdzi0qwo"/><path class="ice5a2nwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:house-4"} {...others} />);
}

export default Component;
