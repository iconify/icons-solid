import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sam1kjbyc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sam1kjbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:apps"} {...others} />);
}

export default Component;
