import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv731-ofg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bv731-ofg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:reference-point-top-left"} {...others} />);
}

export default Component;
