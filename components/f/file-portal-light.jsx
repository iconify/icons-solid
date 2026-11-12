import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irsl63llt.css';
import '../../css/n/nvwx11b3c.css';
import '../../css/n/n4xv7q49k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="irsl63llt"/><path class="nvwx11b3c"/><path class="n4xv7q49k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:file-portal-light"} {...others} />);
}

export default Component;
