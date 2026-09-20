import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yztl9nsel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yztl9nsel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:crop-5-4-filled"} {...others} />);
}

export default Component;
