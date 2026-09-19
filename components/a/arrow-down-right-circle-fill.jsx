import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f86d5ub3e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f86d5ub3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-down-right-circle-fill"} {...others} />);
}

export default Component;
