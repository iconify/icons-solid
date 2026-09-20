import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx5x3u-1w.css';
import '../../css/u/u7gqq6bqf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mx5x3u-1w"/><path class="u7gqq6bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:food-drink-fish-bone"} {...others} />);
}

export default Component;
