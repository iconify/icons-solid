import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so1ox1b0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="so1ox1b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-letter-i-filled"} {...others} />);
}

export default Component;
