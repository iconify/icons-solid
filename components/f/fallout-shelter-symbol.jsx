import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt9sd4r-w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kt9sd4r-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fallout-shelter-symbol"} {...others} />);
}

export default Component;
