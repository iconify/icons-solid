import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr6m2nb0c.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="tr6m2nb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:slightly-smiling-face-filled"} {...others} />);
}

export default Component;
