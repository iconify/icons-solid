import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l00kb8f8r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l00kb8f8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard-pulse"} {...others} />);
}

export default Component;
