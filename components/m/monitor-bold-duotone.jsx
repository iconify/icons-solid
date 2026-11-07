import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0ntbnb-n.css';
import '../../css/s/s7ykjoo1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0ntbnb-n"/><path class="s7ykjoo1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-bold-duotone"} {...others} />);
}

export default Component;
