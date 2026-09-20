import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh23lb5bp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sh23lb5bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-driving-motorboat-on-water-under-paragraph"} {...others} />);
}

export default Component;
