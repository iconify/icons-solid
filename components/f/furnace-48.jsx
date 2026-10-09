import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhknbhbfu.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/o/owu6fcc5e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lhknbhbfu"/><path class="c65-ehvfy"/><path class="owu6fcc5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:furnace-48"} {...others} />);
}

export default Component;
