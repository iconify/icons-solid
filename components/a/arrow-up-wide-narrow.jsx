import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tke0wbcic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tke0wbcic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-wide-narrow"} {...others} />);
}

export default Component;
