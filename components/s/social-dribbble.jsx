import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmuf1bb4g.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="cmuf1bb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-dribbble"} {...others} />);
}

export default Component;
