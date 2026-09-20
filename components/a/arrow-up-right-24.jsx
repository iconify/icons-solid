import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wamhf9-td.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wamhf9-td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:arrow-up-right-24"} {...others} />);
}

export default Component;
