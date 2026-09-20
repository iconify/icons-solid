import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm0--3b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm0--3b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:encryption-check"} {...others} />);
}

export default Component;
