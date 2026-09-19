import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj0bk4b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wj0bk4b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:font-family"} {...others} />);
}

export default Component;
