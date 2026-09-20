import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhuz6xbtj.css';
import '../../css/f/fueron2wo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vhuz6xbtj"/><path clip-rule="evenodd" class="fueron2wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:calendar-16"} {...others} />);
}

export default Component;
