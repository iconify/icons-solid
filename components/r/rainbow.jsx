import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbqcy-x8t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kbqcy-x8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:rainbow"} {...others} />);
}

export default Component;
