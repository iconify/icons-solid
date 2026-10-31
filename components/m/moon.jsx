import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w4o1dbf3v.css';
import '../../css/u/uablz1qlt.css';
import '../../css/l/lz7udcbbw.css';
import '../../css/t/tg7vf-bah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w4o1dbf3v wm-shadow"/><path class="uablz1qlt wm-shadow"/><path class="lz7udcbbw"/><path class="tg7vf-bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:moon"} {...others} />);
}

export default Component;
