import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ualv6vazw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ualv6vazw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:location-pin-alt"} {...others} />);
}

export default Component;
