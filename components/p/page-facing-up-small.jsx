import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8-wchbpy.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="a8-wchbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:page-facing-up-small"} {...others} />);
}

export default Component;
