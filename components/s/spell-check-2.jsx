import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqpax39ar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vqpax39ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:spell-check-2"} {...others} />);
}

export default Component;
