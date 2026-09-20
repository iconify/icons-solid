import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/o/o-lus3buv.css';
import '../../css/i/ifhcuvbfd.css';
import '../../css/o/om7xcw6kh.css';
import '../../css/f/fxaxtssgb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="o-lus3buv"/><path class="ifhcuvbfd"/><path class="om7xcw6kh"/><path class="fxaxtssgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:music-note-circle"} {...others} />);
}

export default Component;
