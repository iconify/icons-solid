import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6d5uggdo.css';
import '../../css/c/cuzgrrbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6d5uggdo"/><path class="cuzgrrbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:phone-call"} {...others} />);
}

export default Component;
