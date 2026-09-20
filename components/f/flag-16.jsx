import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_0zxifyl.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x_0zxifyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:flag-16"} {...others} />);
}

export default Component;
