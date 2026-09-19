import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooipf_b_w.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="ooipf_b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:vimeo-rect"} {...others} />);
}

export default Component;
