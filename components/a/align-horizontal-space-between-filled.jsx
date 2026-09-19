import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8o2mmbrq.css';
import '../../css/t/t_9pnl1bo.css';
import '../../css/z/zvvso5rkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8o2mmbrq"/><rect class="t_9pnl1bo"/><rect class="zvvso5rkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-horizontal-space-between-filled"} {...others} />);
}

export default Component;
