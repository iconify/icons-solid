import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/br4crqm4h.css';
import '../../css/w/wg752-bxn.css';
import '../../css/u/umny35whw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="br4crqm4h wm-shadow"/><path class="wg752-bxn wm-shadow"/><path class="umny35whw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:link-2"} {...others} />);
}

export default Component;
