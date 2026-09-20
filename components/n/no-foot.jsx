import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8vlsdmez.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y8vlsdmez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:no-foot"} {...others} />);
}

export default Component;
