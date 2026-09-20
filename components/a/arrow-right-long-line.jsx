import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz0yvmeas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz0yvmeas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:arrow-right-long-line"} {...others} />);
}

export default Component;
