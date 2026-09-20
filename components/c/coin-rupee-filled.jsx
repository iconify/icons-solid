import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgl4bwb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgl4bwb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coin-rupee-filled"} {...others} />);
}

export default Component;
