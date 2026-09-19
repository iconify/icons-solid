import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0izj7bsj.css';
import '../../css/p/p64c9l0on.css';
import '../../css/a/aexcjlr_h.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="y0izj7bsj"/><path class="p64c9l0on"/><path class="aexcjlr_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:animation-solid"} {...others} />);
}

export default Component;
