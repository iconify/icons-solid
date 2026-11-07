import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qa-noy6bq.css';
import '../../css/r/riy46sbpp.css';
import '../../css/y/y_8rz4bff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="qa-noy6bq"/><path class="riy46sbpp"/></g><path class="y_8rz4bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-bold-duotone"} {...others} />);
}

export default Component;
