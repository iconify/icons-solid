import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0qkzb76e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0qkzb76e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bzrx"} {...others} />);
}

export default Component;
