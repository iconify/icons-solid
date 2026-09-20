import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkrilib-s.css';
import '../../css/d/dh5-_5bqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lkrilib-s"/><path clip-rule="evenodd" class="dh5-_5bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:movie"} {...others} />);
}

export default Component;
