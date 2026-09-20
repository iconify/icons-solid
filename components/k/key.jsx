import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lty3y1n9z.css';
import '../../css/e/ei-47ebjt.css';
import '../../css/g/gcr3q4b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lty3y1n9z"/><path class="ei-47ebjt"/><path class="gcr3q4b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:key"} {...others} />);
}

export default Component;
