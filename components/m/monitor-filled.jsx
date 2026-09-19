import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrac7tc6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrac7tc6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:monitor-filled"} {...others} />);
}

export default Component;
