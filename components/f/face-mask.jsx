import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b2e9t9vkt.css';
import '../../css/s/sr_hvjb1x.css';
import '../../css/w/w5ksl4b4f.css';
import '../../css/f/ft74b4bft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b2e9t9vkt wm-shadow"/><path class="sr_hvjb1x wm-shadow"/><path class="w5ksl4b4f"/><path class="ft74b4bft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:face-mask"} {...others} />);
}

export default Component;
