import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-8zs4kug.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l-8zs4kug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:pyramid"} {...others} />);
}

export default Component;
