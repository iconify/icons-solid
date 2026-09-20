import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrnnb9bhf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xrnnb9bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:branch-deleted"} {...others} />);
}

export default Component;
