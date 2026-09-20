import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmuh9obmz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qmuh9obmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:circle-filled-16"} {...others} />);
}

export default Component;
