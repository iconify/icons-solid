import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn6qiobpx.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="rn6qiobpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:tic-tac-toe"} {...others} />);
}

export default Component;
