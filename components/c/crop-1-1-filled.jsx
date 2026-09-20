import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni-aavqyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni-aavqyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:crop-1-1-filled"} {...others} />);
}

export default Component;
