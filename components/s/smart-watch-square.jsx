import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6xlo84ma.css';
import '../../css/x/xapspt1er.css';
import '../../css/r/re3vafbfx.css';
import '../../css/l/l_pb9i6ko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x6xlo84ma"/><path class="xapspt1er"/><path class="re3vafbfx"/><path class="l_pb9i6ko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smart-watch-square"} {...others} />);
}

export default Component;
