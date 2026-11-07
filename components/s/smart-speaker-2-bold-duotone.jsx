import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rld7fjmad.css';
import '../../css/d/dj3ck_bbc.css';
import '../../css/q/qca7rbbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="rld7fjmad"/><path class="dj3ck_bbc"/></g><path class="qca7rbbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-2-bold-duotone"} {...others} />);
}

export default Component;
