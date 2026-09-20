import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7c1udmws.css';
import '../../css/t/twz87puxk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x7c1udmws"/><path clip-rule="evenodd" class="twz87puxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pedal-outlines-16"} {...others} />);
}

export default Component;
