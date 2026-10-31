import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j5rbj8b1h.css';
import '../../css/h/hljce7egt.css';
import '../../css/x/xwal0ybbu.css';
import '../../css/y/y8o8afbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="j5rbj8b1h wm-shadow"/><path class="hljce7egt wm-shadow"/><path class="xwal0ybbu"/><path class="y8o8afbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:split"} {...others} />);
}

export default Component;
