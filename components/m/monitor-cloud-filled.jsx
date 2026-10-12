import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgqe2rbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cgqe2rbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-cloud-filled"} {...others} />);
}

export default Component;
