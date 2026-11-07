import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnf6ldb9q.css';
import '../../css/z/zjftgfb_b.css';
import '../../css/c/c32p5b3tz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tnf6ldb9q"/><path class="zjftgfb_b"/><path clip-rule="evenodd" class="c32p5b3tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-outline"} {...others} />);
}

export default Component;
