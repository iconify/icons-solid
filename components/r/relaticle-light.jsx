import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc3xoabmc.css';
import '../../css/i/i9rrzu3ex.css';
import '../../css/n/n9pul1_5b.css';
import '../../css/z/z-uhu55bb.css';
import '../../css/d/dyso_pv8k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fc3xoabmc"/><path class="i9rrzu3ex"/><path class="n9pul1_5b"/><path class="z-uhu55bb"/><path class="dyso_pv8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relaticle-light"} {...others} />);
}

export default Component;
