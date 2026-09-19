import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf_ef62wo.css';
import '../../css/b/bbtfm4byx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf_ef62wo"/><path class="bbtfm4byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-event"} {...others} />);
}

export default Component;
