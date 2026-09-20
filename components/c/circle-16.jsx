import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvgij0b_x.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xvgij0b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:circle-16"} {...others} />);
}

export default Component;
