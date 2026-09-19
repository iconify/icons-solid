import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7vx6y1bx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7vx6y1bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:search-plus"} {...others} />);
}

export default Component;
