import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-tav8a0x.css';
import '../../css/w/w1-b9jboe.css';
import '../../css/x/x7r_too4w.css';
import '../../css/k/k4tnp4b9a.css';
import '../../css/l/lz2z9_c7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j-tav8a0x wm-shadow"/><path class="w1-b9jboe wm-shadow"/><path class="x7r_too4w"/><path class="k4tnp4b9a"/><path class="lz2z9_c7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:armchair"} {...others} />);
}

export default Component;
