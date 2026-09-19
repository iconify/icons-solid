import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiff-v72c.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="oiff-v72c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:odnoklassniki-square"} {...others} />);
}

export default Component;
