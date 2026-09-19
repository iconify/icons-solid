import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj9rb1bov.css';

const viewBox = {"width":768,"height":1280};
const content = `<path class="sj9rb1bov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:volume-off"} {...others} />);
}

export default Component;
