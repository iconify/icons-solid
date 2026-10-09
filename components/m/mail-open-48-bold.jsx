import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2je0ebuv.css';
import '../../css/f/f0_0fq_hk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t2je0ebuv"/><path class="f0_0fq_hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-open-48-bold"} {...others} />);
}

export default Component;
