import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd3xg04we.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bd3xg04we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:apple-keyboard-control"} {...others} />);
}

export default Component;
