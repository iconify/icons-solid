import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0i8fc4rv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x0i8fc4rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nsis-old"} {...others} />);
}

export default Component;
