import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he0w76bjd.css';
import '../../css/n/n3c1i_dav.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="he0w76bjd"/><path class="n3c1i_dav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nametag"} {...others} />);
}

export default Component;
