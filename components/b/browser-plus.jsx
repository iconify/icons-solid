import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5iq_5iok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5iq_5iok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:browser-plus"} {...others} />);
}

export default Component;
