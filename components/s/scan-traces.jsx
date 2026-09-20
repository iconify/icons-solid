import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltw3g9bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltw3g9bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scan-traces"} {...others} />);
}

export default Component;
