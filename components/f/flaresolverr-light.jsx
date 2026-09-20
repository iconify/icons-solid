import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db86bu4ok.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="db86bu4ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flaresolverr-light"} {...others} />);
}

export default Component;
