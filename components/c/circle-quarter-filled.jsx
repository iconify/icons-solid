import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar1aq-_-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar1aq-_-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-quarter-filled"} {...others} />);
}

export default Component;
