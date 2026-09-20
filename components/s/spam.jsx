import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejp8e72nh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ejp8e72nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:spam"} {...others} />);
}

export default Component;
