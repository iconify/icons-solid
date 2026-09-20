import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s40lrccni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s40lrccni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chevron-left-pipe"} {...others} />);
}

export default Component;
