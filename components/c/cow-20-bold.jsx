import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gli25bb3i.css';
import '../../css/j/jpkklnhzv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gli25bb3i"/><path class="jpkklnhzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cow-20-bold"} {...others} />);
}

export default Component;
