import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcpscr_4z.css';
import '../../css/b/b6dzwabah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lcpscr_4z"/><path class="b6dzwabah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sidebar-right"} {...others} />);
}

export default Component;
