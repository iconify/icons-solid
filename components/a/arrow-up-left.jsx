import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h6d4dbc9x.css';
import '../../css/m/meebfmb5a.css';
import '../../css/o/o5_-zhbug.css';
import '../../css/d/d4vhvib2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h6d4dbc9x wm-shadow"/><path class="meebfmb5a wm-shadow"/><path class="o5_-zhbug"/><path class="d4vhvib2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-up-left"} {...others} />);
}

export default Component;
