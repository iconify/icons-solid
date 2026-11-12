import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk0l0vvyh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tk0l0vvyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-cloud-light"} {...others} />);
}

export default Component;
