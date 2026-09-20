import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie5ghf9ci.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ie5ghf9ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anonymousoverflow-dark"} {...others} />);
}

export default Component;
