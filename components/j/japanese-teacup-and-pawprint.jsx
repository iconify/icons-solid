import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5i_mx52w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r5i_mx52w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:japanese-teacup-and-pawprint"} {...others} />);
}

export default Component;
