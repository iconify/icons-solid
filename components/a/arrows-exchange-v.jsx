import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvz5bs72g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvz5bs72g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:arrows-exchange-v"} {...others} />);
}

export default Component;
