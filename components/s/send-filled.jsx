import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0oq1yq9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0oq1yq9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:send-filled"} {...others} />);
}

export default Component;
