import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohs9pi70i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohs9pi70i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:twitter-fill-24"} {...others} />);
}

export default Component;
