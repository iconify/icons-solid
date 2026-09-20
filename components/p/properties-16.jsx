import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhhrt9b6q.css';
import '../../css/o/o1l-bgbhb.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="uhhrt9b6q"/><path clip-rule="evenodd" class="o1l-bgbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:properties-16"} {...others} />);
}

export default Component;
