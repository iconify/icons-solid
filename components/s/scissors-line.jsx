import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cajk2g7zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cajk2g7zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:scissors-line"} {...others} />);
}

export default Component;
