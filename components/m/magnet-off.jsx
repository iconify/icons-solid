import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_-3yab7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_-3yab7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:magnet-off"} {...others} />);
}

export default Component;
