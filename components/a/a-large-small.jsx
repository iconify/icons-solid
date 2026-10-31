import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s-47tuq-b.css';
import '../../css/p/pc0h08v4d.css';
import '../../css/x/x3c8exbij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s-47tuq-b wm-shadow"/><path class="pc0h08v4d wm-shadow"/><path class="x3c8exbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:a-large-small"} {...others} />);
}

export default Component;
