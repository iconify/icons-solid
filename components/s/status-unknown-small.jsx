import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uedkzf-5g.css';

const viewBox = {"width":12,"height":12};
const content = `<rect class="uedkzf-5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:status-unknown-small"} {...others} />);
}

export default Component;
