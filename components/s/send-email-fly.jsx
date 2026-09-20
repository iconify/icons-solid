import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc7cgqb6v.css';
import '../../css/r/r24iznqrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc7cgqb6v"/><path class="r24iznqrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:send-email-fly"} {...others} />);
}

export default Component;
