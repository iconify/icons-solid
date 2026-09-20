import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2w5x-76v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b2w5x-76v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:vending-pack"} {...others} />);
}

export default Component;
