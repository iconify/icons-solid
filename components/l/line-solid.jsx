import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhv7ffbkc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uhv7ffbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:line-solid"} {...others} />);
}

export default Component;
