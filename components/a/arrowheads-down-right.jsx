import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9_cg6g2a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="u9_cg6g2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-down-right"} {...others} />);
}

export default Component;
