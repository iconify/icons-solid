import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn9c1cdua.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="dn9c1cdua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-down-right-chevron"} {...others} />);
}

export default Component;
