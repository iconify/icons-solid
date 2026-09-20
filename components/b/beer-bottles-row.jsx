import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep5h712et.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ep5h712et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:beer-bottles-row"} {...others} />);
}

export default Component;
