import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8x5w1b7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8x5w1b7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-filter-duo"} {...others} />);
}

export default Component;
