import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1jm3_ezf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1jm3_ezf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:layout-left"} {...others} />);
}

export default Component;
