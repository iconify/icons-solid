import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7p9rjbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h7p9rjbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bell-fill-round"} {...others} />);
}

export default Component;
