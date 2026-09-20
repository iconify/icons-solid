import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcez2jbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcez2jbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-bar-to-left-dashed"} {...others} />);
}

export default Component;
