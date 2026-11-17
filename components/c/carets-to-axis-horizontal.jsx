import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbswtxmxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbswtxmxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:carets-to-axis-horizontal"} {...others} />);
}

export default Component;
