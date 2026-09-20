import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2qzlccvl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e2qzlccvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:vending-pizza"} {...others} />);
}

export default Component;
