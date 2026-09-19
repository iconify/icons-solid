import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dux41cbwc.css';
import '../../css/j/jgb2w2b3k.css';
import '../../css/i/itdz_wb-w.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="dux41cbwc"/><path class="jgb2w2b3k"/><path class="itdz_wb-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:export"} {...others} />);
}

export default Component;
