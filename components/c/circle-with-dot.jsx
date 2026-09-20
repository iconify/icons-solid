import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xra29bcgj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xra29bcgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:circle-with-dot"} {...others} />);
}

export default Component;
