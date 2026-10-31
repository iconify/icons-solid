import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/weo9vnbgh.css';
import '../../css/d/dv87dmbeo.css';
import '../../css/i/ic9lyt8ds.css';
import '../../css/v/v2g5k0bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="weo9vnbgh wm-shadow"/><path class="dv87dmbeo wm-shadow"/><path class="ic9lyt8ds"/><path class="v2g5k0bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:microwave"} {...others} />);
}

export default Component;
