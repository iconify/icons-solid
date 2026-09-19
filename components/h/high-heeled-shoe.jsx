import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms0e8vi6e.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ms0e8vi6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:high-heeled-shoe"} {...others} />);
}

export default Component;
