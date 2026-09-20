import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvyku1b5s.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tvyku1b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-cruising-above-water"} {...others} />);
}

export default Component;
