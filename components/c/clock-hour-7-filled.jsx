import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/boe6k9bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="boe6k9bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-hour-7-filled"} {...others} />);
}

export default Component;
