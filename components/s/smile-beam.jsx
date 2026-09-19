import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuz9bmb9m.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="yuz9bmb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:smile-beam"} {...others} />);
}

export default Component;
