import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-e1deksh.css';
import '../../css/d/dzrwv9dgi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-e1deksh"/><path class="dzrwv9dgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:copy"} {...others} />);
}

export default Component;
