import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1rfcp77z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s1rfcp77z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:filter"} {...others} />);
}

export default Component;
