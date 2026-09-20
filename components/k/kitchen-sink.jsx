import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erj58-puz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="erj58-puz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:kitchen-sink"} {...others} />);
}

export default Component;
