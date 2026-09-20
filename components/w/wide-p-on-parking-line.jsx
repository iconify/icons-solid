import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw90ydbel.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bw90ydbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wide-p-on-parking-line"} {...others} />);
}

export default Component;
