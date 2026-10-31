import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf-ei04hx.css';
import '../../css/f/faw3i3g2j.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="lf-ei04hx"/><path class="faw3i3g2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:semaphore-signal"} {...others} />);
}

export default Component;
