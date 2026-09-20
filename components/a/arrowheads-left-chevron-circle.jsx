import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv29pbcxa.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uv29pbcxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-left-chevron-circle"} {...others} />);
}

export default Component;
