import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/a/agk31vb-b.css';
import '../../css/t/tl619dqzr.css';
import '../../css/x/xy8nfreah.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="agk31vb-b"/><path class="tl619dqzr"/></g><path class="xy8nfreah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:phoenix"} {...others} />);
}

export default Component;
