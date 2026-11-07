import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4mtqv5td.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tnpmw8b7u.css';
import '../../css/e/e8344vbai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4mtqv5td"/><g class="xtpeb-edw"><path class="tnpmw8b7u"/><path class="e8344vbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rolling-pin-bold-duotone"} {...others} />);
}

export default Component;
