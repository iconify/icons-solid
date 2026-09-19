import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2y7jzbmz.css';
import '../../css/w/wu4cddcrq.css';
import '../../css/e/e8sy34j2t.css';
import '../../css/u/ulh87kb1h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q2y7jzbmz"/><path class="wu4cddcrq"/><path class="e8sy34j2t"/><path class="ulh87kb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dvd"} {...others} />);
}

export default Component;
