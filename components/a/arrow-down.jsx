import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrkryr7mg.css';
import '../../css/s/s4volvbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrkryr7mg"/><path class="s4volvbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:arrow-down"} {...others} />);
}

export default Component;
