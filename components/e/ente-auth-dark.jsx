import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i093s-bce.css';
import '../../css/c/cawcmqbki.css';
import '../../css/f/fk33h5fcb.css';
import '../../css/i/i7ja3-5jo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i093s-bce"/><path class="cawcmqbki"/><path class="fk33h5fcb"/><path class="i7ja3-5jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-auth-dark"} {...others} />);
}

export default Component;
