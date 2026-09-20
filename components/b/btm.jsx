import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3gnr4nrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3gnr4nrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:btm"} {...others} />);
}

export default Component;
