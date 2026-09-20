import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fky3noyfi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fky3noyfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:butterfly-with-stars-and-dots"} {...others} />);
}

export default Component;
