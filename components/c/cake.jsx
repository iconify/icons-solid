import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8tz_-8uc.css';
import '../../css/y/ytpej0t9m.css';
import '../../css/r/r9qfw4bun.css';
import '../../css/u/u2_5h9ixw.css';
import '../../css/j/j-lgpdbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a y8tz_-8uc"/><path class="wm-a ytpej0t9m"/><path class="r9qfw4bun wm-k"/><path class="u2_5h9ixw wm-k"/><path class="j-lgpdbwa wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cake"} {...others} />);
}

export default Component;
