import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7blleqsn.css';
import '../../css/u/uj_xhacmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7blleqsn"/><path class="uj_xhacmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:go-pro-bold"} {...others} />);
}

export default Component;
