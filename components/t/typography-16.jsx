import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f91v1qb7y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f91v1qb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:typography-16"} {...others} />);
}

export default Component;
