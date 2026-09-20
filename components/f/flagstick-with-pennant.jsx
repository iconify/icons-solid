import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peplw6b2b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="peplw6b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:flagstick-with-pennant"} {...others} />);
}

export default Component;
