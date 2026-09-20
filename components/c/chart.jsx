import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1parx3gv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q1parx3gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:chart"} {...others} />);
}

export default Component;
