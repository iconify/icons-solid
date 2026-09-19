import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8cl6ubas.css';

const viewBox = {"width":500,"height":512};
const content = `<path class="h8cl6ubas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:saltstack"} {...others} />);
}

export default Component;
