import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri2-alb5d.css';
import '../../css/c/cdcuj1bfy.css';
import '../../css/y/yeqb12bcq.css';
import '../../css/m/mi4ifbrrd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 ri2-alb5d"/><path class="cdcuj1bfy clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 yeqb12bcq"/><path class="clr-i-solid clr-i-solid-path-4 mi4ifbrrd"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:archive-solid"} {...others} />);
}

export default Component;
