import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_-g7nb8c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l_-g7nb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:caret-down"} {...others} />);
}

export default Component;
