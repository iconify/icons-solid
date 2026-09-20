import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa9ce_1pp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xa9ce_1pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lldap-dark"} {...others} />);
}

export default Component;
