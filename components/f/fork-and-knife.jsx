import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr13y7_yy.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="yr13y7_yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:fork-and-knife"} {...others} />);
}

export default Component;
