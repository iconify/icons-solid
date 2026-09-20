import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzuc7cbmn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wzuc7cbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:arrow-left-16"} {...others} />);
}

export default Component;
