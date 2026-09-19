import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5-1y4y0q.css';

const viewBox = {"width":312,"height":496};
const content = `<path class="n5-1y4y0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:double-arrow"} {...others} />);
}

export default Component;
