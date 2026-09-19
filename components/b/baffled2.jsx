import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8t7ilbin.css';
import '../../css/n/nxzuucrxz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l8t7ilbin"/><path class="nxzuucrxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:baffled2"} {...others} />);
}

export default Component;
