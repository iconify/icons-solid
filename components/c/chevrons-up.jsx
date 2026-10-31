import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s3jlzcczn.css';
import '../../css/f/fuoff3b8g.css';
import '../../css/j/jm92ox9fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s3jlzcczn wm-shadow"/><path class="fuoff3b8g wm-shadow"/><path class="jm92ox9fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevrons-up"} {...others} />);
}

export default Component;
