import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oly_4rbgm.css';
import '../../css/s/steyv6bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oly_4rbgm"/><path class="steyv6bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:playstation"} {...others} />);
}

export default Component;
