import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uaa5_5o5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uaa5_5o5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bong-off"} {...others} />);
}

export default Component;
