import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv88c2lwy.css';
import '../../css/e/ezwpo0b0i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nv88c2lwy"/><path class="ezwpo0b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vegetation-encroachment"} {...others} />);
}

export default Component;
