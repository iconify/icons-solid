import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6u8fjbqz.css';

const viewBox = {"width":408,"height":384};
const content = `<path class="c6u8fjbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:trending-flat"} {...others} />);
}

export default Component;
