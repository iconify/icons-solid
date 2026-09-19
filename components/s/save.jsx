import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly7t4lb3c.css';

const viewBox = {"width":480,"height":496};
const content = `<path class="ly7t4lb3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:save"} {...others} />);
}

export default Component;
