import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z269oc3zt.css';
import '../../css/n/n8_3uobgm.css';
import '../../css/v/vnyt80nxi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-180 30 30)" class="z269oc3zt"/><path class="n8_3uobgm"/><path class="vnyt80nxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:star-and-crescent"} {...others} />);
}

export default Component;
