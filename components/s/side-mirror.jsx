import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2zkc0bqo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z2zkc0bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:side-mirror"} {...others} />);
}

export default Component;
