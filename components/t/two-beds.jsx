import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4kqi0kkj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x4kqi0kkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:two-beds"} {...others} />);
}

export default Component;
