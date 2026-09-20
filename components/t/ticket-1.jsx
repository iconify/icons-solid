import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1h0h5b4b.css';
import '../../css/i/ifw_kj01d.css';
import '../../css/t/t-2rr6bcd.css';
import '../../css/l/lng2rbcym.css';
import '../../css/o/ogj-ug2at.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r1h0h5b4b"/><path class="ifw_kj01d"/><path class="t-2rr6bcd"/><path class="lng2rbcym"/><path class="ogj-ug2at"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:ticket-1"} {...others} />);
}

export default Component;
