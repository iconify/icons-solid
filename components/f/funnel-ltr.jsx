import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhwf4_tkf.css';
import '../../css/y/ydubk1bie.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vhwf4_tkf"/><path class="ydubk1bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:funnel-ltr"} {...others} />);
}

export default Component;
