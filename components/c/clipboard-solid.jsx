import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emikoz2ew.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="emikoz2ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:clipboard-solid"} {...others} />);
}

export default Component;
