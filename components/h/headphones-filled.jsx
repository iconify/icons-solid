import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do-6iuahm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do-6iuahm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:headphones-filled"} {...others} />);
}

export default Component;
