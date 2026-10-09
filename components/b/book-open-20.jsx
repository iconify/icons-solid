import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlk1-zbma.css';
import '../../css/l/l016wdj-z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rlk1-zbma"/><path class="l016wdj-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-open-20"} {...others} />);
}

export default Component;
