import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyqr6ubaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyqr6ubaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:move-to-top-24"} {...others} />);
}

export default Component;
