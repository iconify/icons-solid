import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7elhyu2x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z7elhyu2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:hand-holding-heart-solid"} {...others} />);
}

export default Component;
