import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxmb1c0no.css';
import '../../css/f/fr1kxcbgu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lxmb1c0no"/><path class="fr1kxcbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudflare-zero-trust-dark"} {...others} />);
}

export default Component;
