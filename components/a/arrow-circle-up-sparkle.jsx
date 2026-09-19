import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nte0_mbcc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nte0_mbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:arrow-circle-up-sparkle"} {...others} />);
}

export default Component;
