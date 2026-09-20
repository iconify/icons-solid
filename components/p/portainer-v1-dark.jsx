import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykk0mwkhw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ykk0mwkhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:portainer-v1-dark"} {...others} />);
}

export default Component;
