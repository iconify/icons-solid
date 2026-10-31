import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9svjjhpo.css';
import '../../css/v/v1_dsqc1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9svjjhpo"/><path class="v1_dsqc1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-right-filled"} {...others} />);
}

export default Component;
