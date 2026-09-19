import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udy9dlbbl.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="udy9dlbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:globe"} {...others} />);
}

export default Component;
