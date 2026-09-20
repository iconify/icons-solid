import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g45c17bnc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g45c17bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:u-s-bank-dark"} {...others} />);
}

export default Component;
