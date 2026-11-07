import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv26kqbrj.css';
import '../../css/s/s7rjj21fg.css';
import '../../css/i/inygc8bcc.css';
import '../../css/a/auhv3ob1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fv26kqbrj"/><path class="s7rjj21fg"/><path class="inygc8bcc"/><path class="auhv3ob1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bed-bold-duotone"} {...others} />);
}

export default Component;
