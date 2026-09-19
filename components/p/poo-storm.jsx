import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdtz0m5lx.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="zdtz0m5lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:poo-storm"} {...others} />);
}

export default Component;
