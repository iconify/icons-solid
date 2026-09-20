import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1njp3l4b.css';
import '../../css/q/q9z9poh1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v1njp3l4b"/><path class="q9z9poh1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moon-waning-crescent"} {...others} />);
}

export default Component;
