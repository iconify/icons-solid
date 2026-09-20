import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qynpu4n-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qynpu4n-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:squares-subtract"} {...others} />);
}

export default Component;
