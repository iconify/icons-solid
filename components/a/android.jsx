import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjeb2y1lr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yjeb2y1lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:android"} {...others} />);
}

export default Component;
