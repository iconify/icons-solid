import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7o1llbcs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n7o1llbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:condom-and-mars"} {...others} />);
}

export default Component;
