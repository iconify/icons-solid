import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg6ur5ojt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg6ur5ojt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ironing-filled"} {...others} />);
}

export default Component;
