import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xti4taclw.css';
import '../../css/p/pr5hkx2sg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xti4taclw"/><path class="pr5hkx2sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:c-sharp"} {...others} />);
}

export default Component;
