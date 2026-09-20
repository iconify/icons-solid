import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mms7eybus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mms7eybus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:aerial-lift"} {...others} />);
}

export default Component;
