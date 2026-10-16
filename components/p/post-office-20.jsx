import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br5ntsq5m.css';
import '../../css/i/i7r-7htza.css';
import '../../css/j/j2lsbzg7n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="br5ntsq5m"/><path class="i7r-7htza"/><path class="j2lsbzg7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:post-office-20"} {...others} />);
}

export default Component;
