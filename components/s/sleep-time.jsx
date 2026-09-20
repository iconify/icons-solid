import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o35s1tbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o35s1tbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sleep-time"} {...others} />);
}

export default Component;
