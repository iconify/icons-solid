import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob20kwbzk.css';
import '../../css/l/l1kbw1b1l.css';
import '../../css/x/x0hxdhfls.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ob20kwbzk"/><path class="l1kbw1b1l"/><path class="x0hxdhfls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:iceland"} {...others} />);
}

export default Component;
