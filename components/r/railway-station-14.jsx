import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd0hb1b-w.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="pd0hb1b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:railway-station-14"} {...others} />);
}

export default Component;
