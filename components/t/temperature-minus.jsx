import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bahqo5bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bahqo5bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:temperature-minus"} {...others} />);
}

export default Component;
