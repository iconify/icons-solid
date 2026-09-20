import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7w_-bb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u7w_-bb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-vertical-2-filled"} {...others} />);
}

export default Component;
