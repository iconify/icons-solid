import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok6uxj9nr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ok6uxj9nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:memories-light"} {...others} />);
}

export default Component;
