import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhq6-qa5r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nhq6-qa5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:embassy"} {...others} />);
}

export default Component;
