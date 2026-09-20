import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4ysgrd8q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b4ysgrd8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:vending-bottle-upside-down"} {...others} />);
}

export default Component;
