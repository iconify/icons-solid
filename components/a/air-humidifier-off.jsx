import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbk7ft81q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbk7ft81q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:air-humidifier-off"} {...others} />);
}

export default Component;
