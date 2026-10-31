import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f932xy51a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f932xy51a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-16-9-bulk-round"} {...others} />);
}

export default Component;
