import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4mj43pwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e4mj43pwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-number-6-filled"} {...others} />);
}

export default Component;
