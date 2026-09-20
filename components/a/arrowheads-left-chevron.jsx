import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahhxt3bgb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ahhxt3bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-left-chevron"} {...others} />);
}

export default Component;
