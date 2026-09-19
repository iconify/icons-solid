import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmk826btk.css';
import '../../css/x/xvjlt3b7b.css';
import '../../css/x/xdka2wbio.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hmk826btk"/><path class="xvjlt3b7b"/><path class="xdka2wbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:odometer"} {...others} />);
}

export default Component;
