import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwtqo0rto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cwtqo0rto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:subway-wifi-fill"} {...others} />);
}

export default Component;
