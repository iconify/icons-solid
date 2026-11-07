import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4f_of1ov.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/a0p-cgb0r.css';
import '../../css/j/jw4a19nsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q4f_of1ov"/><g class="xtpeb-edw"><path class="a0p-cgb0r"/><path class="jw4a19nsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-bold-duotone"} {...others} />);
}

export default Component;
