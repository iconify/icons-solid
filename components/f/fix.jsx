import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avh6a8bbm.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="avh6a8bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:fix"} {...others} />);
}

export default Component;
