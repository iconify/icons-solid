import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsfm2oczx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dsfm2oczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:azirevpn-light"} {...others} />);
}

export default Component;
