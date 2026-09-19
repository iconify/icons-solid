import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw2d8kh4b.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="qw2d8kh4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:shopping-trolley-small"} {...others} />);
}

export default Component;
