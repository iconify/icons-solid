import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajyu9s76q.css';
import '../../css/c/cbj0tbbra.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ajyu9s76q"/><path class="cbj0tbbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-dots-20-bold"} {...others} />);
}

export default Component;
