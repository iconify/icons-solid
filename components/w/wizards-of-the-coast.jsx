import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azi09o8qi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="azi09o8qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wizards-of-the-coast"} {...others} />);
}

export default Component;
