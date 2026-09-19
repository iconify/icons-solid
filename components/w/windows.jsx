import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo9q2tsch.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="xo9q2tsch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:windows"} {...others} />);
}

export default Component;
