import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1dt1gbdl.css';
import '../../css/r/r6mz58bje.css';
import '../../css/z/z08a_ruyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t1dt1gbdl"/><path class="r6mz58bje"/><path class="z08a_ruyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-outline"} {...others} />);
}

export default Component;
