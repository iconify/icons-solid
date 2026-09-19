import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4y--i39e.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="u4y--i39e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:ci-cd-line"} {...others} />);
}

export default Component;
