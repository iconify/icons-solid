import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4fiz0l4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l4fiz0l4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-2-outline"} {...others} />);
}

export default Component;
