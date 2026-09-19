import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqjjdx6vg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="hqjjdx6vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:billed-cap-small"} {...others} />);
}

export default Component;
