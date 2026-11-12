import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w56ozbb3k.css';
import '../../css/d/dedjm9gwi.css';
import '../../css/p/p8l3crl_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w56ozbb3k"/><path class="dedjm9gwi"/><path class="p8l3crl_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:chorizard"} {...others} />);
}

export default Component;
