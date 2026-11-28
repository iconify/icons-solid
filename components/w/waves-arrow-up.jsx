import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kruyp5nwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kruyp5nwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:waves-arrow-up"} {...others} />);
}

export default Component;
