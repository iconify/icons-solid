import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8q25bckv.css';
import '../../css/g/gepn6ubdy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i8q25bckv"/><path class="gepn6ubdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:disable-bell-notification"} {...others} />);
}

export default Component;
