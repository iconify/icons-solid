import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/durr5709b.css';
import '../../css/i/ibed8bc7x.css';
import '../../css/f/f30-13bws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="durr5709b"/><path class="ibed8bc7x"/><path class="f30-13bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:waiting-room-clock"} {...others} />);
}

export default Component;
