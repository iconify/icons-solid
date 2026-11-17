import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4wh_8bei.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y4wh_8bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chirpstack-light"} {...others} />);
}

export default Component;
