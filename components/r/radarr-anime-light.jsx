import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc3icy34w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vc3icy34w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radarr-anime-light"} {...others} />);
}

export default Component;
