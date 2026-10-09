import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehv5ztb4q.css';
import '../../css/i/ijrr7tsvq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ehv5ztb4q"/><path class="ijrr7tsvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-down-20-bold"} {...others} />);
}

export default Component;
