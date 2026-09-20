import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lybmi-wnv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lybmi-wnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:achievement-award"} {...others} />);
}

export default Component;
