import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irb-tcb5g.css';
import '../../css/k/kt2e20byv.css';

const viewBox = {"width":23.3,"height":25.7};
const content = `<path class="irb-tcb5g"/><path class="kt2e20byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:unit"} {...others} />);
}

export default Component;
