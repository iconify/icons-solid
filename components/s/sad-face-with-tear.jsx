import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfyt19vyn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bfyt19vyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sad-face-with-tear"} {...others} />);
}

export default Component;
