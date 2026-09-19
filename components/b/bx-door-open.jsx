import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgxd4gqfq.css';
import '../../css/i/iaz7k-bdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgxd4gqfq"/><path class="iaz7k-bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-door-open"} {...others} />);
}

export default Component;
