import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nixyq4bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nixyq4bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bubble-text"} {...others} />);
}

export default Component;
