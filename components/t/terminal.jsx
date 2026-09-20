import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obib_9bux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obib_9bux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:terminal"} {...others} />);
}

export default Component;
