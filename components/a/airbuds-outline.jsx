import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8j-1-v7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j8j-1-v7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-outline"} {...others} />);
}

export default Component;
