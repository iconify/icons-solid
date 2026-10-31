import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pmshesa4n.css';
import '../../css/x/xbl4w7b0q.css';
import '../../css/d/dya65y26c.css';
import '../../css/c/ccjiccb7m.css';
import '../../css/y/ywsdwrb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pmshesa4n wm-shadow"/><path class="wm-shadow xbl4w7b0q"/><path class="dya65y26c"/><path class="ccjiccb7m"/><path class="ywsdwrb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:building"} {...others} />);
}

export default Component;
