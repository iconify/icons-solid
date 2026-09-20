import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isw9jyb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isw9jyb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-f7-filled"} {...others} />);
}

export default Component;
