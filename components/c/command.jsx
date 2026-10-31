import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a_vfb4ntm.css';
import '../../css/g/grhc7w2vk.css';
import '../../css/r/rphn1cc9p.css';
import '../../css/f/f1t-wwxme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a_vfb4ntm wm-shadow"/><path class="grhc7w2vk wm-shadow"/><path class="rphn1cc9p"/><path class="f1t-wwxme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:command"} {...others} />);
}

export default Component;
