import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjql9masp.css';
import '../../css/t/twciz0sfy.css';
import '../../css/b/b_kj4kkip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rjql9masp"/><path class="twciz0sfy"/><path class="b_kj4kkip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dumbbell-48"} {...others} />);
}

export default Component;
