import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4i1geb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f4i1geb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:channel-4-uk"} {...others} />);
}

export default Component;
