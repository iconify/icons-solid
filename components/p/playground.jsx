import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x1tq5beki.css';
import '../../css/t/thaw_7b4x.css';
import '../../css/l/lkcux1bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x1tq5beki"/><path class="thaw_7b4x wm-shadow"/><path class="lkcux1bhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:playground"} {...others} />);
}

export default Component;
