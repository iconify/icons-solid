import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbl0ijbjl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mbl0ijbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:chess-knight"} {...others} />);
}

export default Component;
