import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfhx01_3w.css';
import '../../css/l/lwt2_3bbg.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="yfhx01_3w"/><path class="lwt2_3bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:people"} {...others} />);
}

export default Component;
