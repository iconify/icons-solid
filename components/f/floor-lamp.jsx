import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv8p6qukd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wv8p6qukd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:floor-lamp"} {...others} />);
}

export default Component;
